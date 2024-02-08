import { AxiosResponse } from "axios";
import Router from "next/router";
import crypto from "../../crypto";
// import AuthorizationService from "../Authorization";
import { cookieConfigOption } from "../../cookie/cookie";
import cookie from "../../cookie";
import url from "@/lib/core/url";
import useAuth, { authorization } from "@/lib/global/Auth/useAuthentication";
import Fetch from "@/lib/core/base-api/base-api";
import { User } from "@/components/User/type";

type userMeResponse = {
  err_code: number;
  err_msg: string;
  data: User[];
};
const conf: cookieConfigOption = { sameSite: "strict", path: "/", maxAge: 60 * 60 * 2, secure: true };

class Authentication {
  public static CONFIG = {
    ACCESS_TOKEN_KEY: "access",
    REFRESH_TOKEN_KEY: "refresh",
    USER_KEY: "user",
    COOKIE_OPTION: conf, // 2 hour expired time
  };

  /**
   * * fetch User Data From API
   */
  public static async getUserMe(): Promise<User | null> {
    const response: AxiosResponse<userMeResponse> = await Fetch.get(url.user.me);
    return response.data.data[0];
  }

  /**
   * * Check userAuth Status
   */
  public static async check(): Promise<boolean> {
    let isLogin = useAuth.getState().isLogIn;
    if (!isLogin) {
      isLogin = await Authentication.checkLocalData();
    } else {
      isLogin = true;
    }

    return isLogin;
  }

  public static async checkLocalData() {
    const accessToken = Authentication.getToken("access");
    const refreshToken = Authentication.getToken("refresh");
    if (accessToken) {
      const user: User = { ...Authentication.getUserFromCookie() };
      Authentication.setAuth(user, { access: accessToken, refresh: refreshToken });
      useAuth.getState().setIsLogIn(true);
      return true;
    } else {
      return false;
    }
  }

  public static async logoutUser() {
    const refresh_token = Authentication.getToken("refresh");
    if (refresh_token) await Fetch.post(url.auth.logout, { refresh_token });
    cookie.clear();
    Router.push("/login");
  }
  /**
   * * Set All User Data to state and cookie
   */
  public static setAuth(user: User, authorization?: authorization) {
    const userData: User = user;

    /**
     * TODO: Set User Global State
     */
    useAuth.getState().setUser(userData);
    if (authorization) {
      useAuth.getState().setAuthorization(authorization);
    }
    useAuth.getState().setIsLogIn(true);
    /**
     * TODO: Set User Global Cookie
     */
    Authentication.setUserToCokkie(userData, authorization);
  }

  /**
   * * Set All User Data to Cookie
   */
  public static setUserToCokkie(user: User, authorization?: authorization) {
    /**
     * TODO: Set User To Cookie
     */
    const encryptedUser = crypto.encrypt(user);
    cookie.set(Authentication.CONFIG.USER_KEY, encryptedUser, Authentication.CONFIG.COOKIE_OPTION);
    /**
     * TODO:  Set Token To Cookies
     */
    if (authorization) {
      Authentication.setToken(authorization);
    }
  }

  /**
   * Get User From Cookies
   * ! Prefer don't use this in react componert
   * either better use useAuth() Hooks
   */
  public static getUserFromCookie(): User {
    const userFromCookie = cookie.get(Authentication.CONFIG.USER_KEY);
    return crypto.decrypt(userFromCookie);
  }

  private static setToken(authorization: authorization) {
    const encyrptedAccessToken = crypto.encrypt(authorization.access);
    const encyrptedRefreshToken = authorization.refresh ? crypto.encrypt(authorization.refresh) : "";
    cookie.set(Authentication.CONFIG.ACCESS_TOKEN_KEY, encyrptedAccessToken, Authentication.CONFIG.COOKIE_OPTION);
    cookie.set(Authentication.CONFIG.REFRESH_TOKEN_KEY, encyrptedRefreshToken, {
      ...Authentication.CONFIG.COOKIE_OPTION,
      maxAge: 60 * 60 * 24 * 2, // 2 days
    });
  }

  public static updateAnonymousUser(data: Partial<User>) {
    const user = Authentication.getUserFromCookie();
    const updatedUser = { ...user, ...data };
    Authentication.setUserToCokkie(updatedUser);
    useAuth.getState().setUser(updatedUser);
    console.log("updated user", updatedUser, data, user);
  }

  /**
   * * get Token From Cookies
   */
  public static getToken(type?: "access" | "refresh"): string {
    let token = "";
    if (type) {
      let keyType = {
        access: Authentication.CONFIG.ACCESS_TOKEN_KEY,
        refresh: Authentication.CONFIG.REFRESH_TOKEN_KEY,
      };
      token = cookie.get(keyType[type]);
    } else {
      token = cookie.get(Authentication.CONFIG.ACCESS_TOKEN_KEY);
    }

    return crypto.decrypt(token);
  }

  /**
   * * Generate Temporary Id
   */
  private static generateTemporaryId(): string {
    const timestamp = Date.now().toString(); // Use timestamp for uniqueness
    const randomString = Math.random().toString(36).substring(2); // Random string
    const combinedString = timestamp + randomString;
    const temporaryId = crypto.encrypt(combinedString);

    return temporaryId;
  }

  public static setTemporaryUserDataToCookie() {
    const temporaryUserData: User = {
      id: 0,
      tempId: Authentication.generateTemporaryId(),
      username: "",
      email: "",
      created_at: "",
      updated_at: "",
      is_admin: false,
      last_login: "",
      confession: [],
      liked_confession: [],
      notifications: [],
      room_confession: [],
    };
    Authentication.setUserToCokkie(temporaryUserData);
    useAuth.getState().setUser({
      ...temporaryUserData,
      tempId: crypto.decrypt(temporaryUserData.tempId as string),
    });
  }
}

export default Authentication;
