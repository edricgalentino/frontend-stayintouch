import { User } from "@/components/User/type";
import { create } from "zustand";

/**
 * * Type Definition
 */
export type authorization = {
  access: string;
  refresh?: string;
};

export type useAuth = {
  /**
   * * State Type Definition
   */
  user: User;
  isLogIn: boolean;
  authorization: authorization;
} & dispatcher;

/**
 * * Dispatcher Type Definition
 */
type dispatcher = {
  setUser: (data: User) => void;
  setAuthorization: (data: authorization) => void;
  setIsLogIn: (status: boolean) => void;
};

const useAuth = create<useAuth>((set) => ({
  /**
   * * State Definition
   */
  isLogIn: false,
  authorization: { access: "", refresh: "" },
  user: {
    id: 0,
    tempId: "",
    username: "",
    email: "",
    confession: [],
    created_at: "",
    updated_at: "",
    is_admin: false,
    last_login: "",
    liked_confession: [],
    notifications: [],
    room_confession: [],
  },

  /**
   * * Dispatcher Definition
   */
  setUser: (data) => set((state) => ({ ...state, user: data })),
  setAuthorization: (data) => set((state) => ({ ...state, authorization: data })),
  setIsLogIn: (status) => set((state) => ({ ...state, isLogIn: status })),
}));

export default useAuth;
