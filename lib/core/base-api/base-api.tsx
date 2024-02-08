import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios";
import { Params, Payload } from "./type";
import useAuth from "@/lib/global/Auth/useAuthentication";

class BaseApi {
  constructor() {
    const token = useAuth.getState().authorization.access;

    if (token) {
      this.setAuthorizationToken(token);
    }
  }

  private axiosClient: AxiosInstance = axios.create({
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    baseURL: process.env.NEXT_PUBLIC_SERVER_API,
  });

  private setAuthorizationToken(token: string): void {
    this.axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  public async get<T>(url: string, config?: AxiosRequestConfig) {
    const response: AxiosResponse<T, T> = await this.axiosClient.get(url, { ...config });
    return response;
  }

  public async post<T>(url: string, payload: Payload, isWithFormData?: boolean, config?: AxiosRequestConfig) {
    const response: AxiosResponse<T, T> = await this.axiosClient.post(url, payload, {
      ...config,
      headers: {
        ...config?.headers,
        "Content-Type": isWithFormData ? "multipart/form-data" : "application/json",
      },
    });
    return response;
  }

  public async put<T>(url: string, payload?: Payload, config?: AxiosRequestConfig) {
    const response: AxiosResponse<T, T> = await this.axiosClient.put(url, payload ?? {}, config);
    return response;
  }

  public async patch<T>(url: string, payload?: Payload, config?: AxiosRequestConfig) {
    const response: AxiosResponse<T, T> = await this.axiosClient.patch(url, payload ?? {}, config);
    return response;
  }

  public async delete<T>(url: string, payload?: Payload, isWithFormData?: boolean, config?: AxiosRequestConfig) {
    const response: AxiosResponse<T, T> = await this.axiosClient.delete(url, {
      data: payload ?? {},
      ...config,
      headers: {
        ...config?.headers,
        "Content-Type": isWithFormData ? "multipart/form-data" : "application/json",
      },
    });
    return response;
  }
}

const Fetch = new BaseApi();

export default Fetch;
