import { create } from "zustand";

/**
 * * Type Definition
 */
export type SnackbarData = {
  message: string;
  type: "success" | "error" | "warning" | "info" | "";
};

export type UseSnackbarType = SnackbarData & dispatcher;

/**
 * * Dispatcher Type Definition
 */
type dispatcher = {
  setSnackbar: (data: SnackbarData) => void;
};

const useSnackbar = create<UseSnackbarType>((set) => ({
  /**
   * * State Definition
   */
  message: "",
  type: "",

  /**
   * * Dispatcher Definition
   */
  setSnackbar: (data) => {
    set(() => ({
      message: data.message,
      type: data.type,
    }));
    setTimeout(() => {
      set(() => ({
        ...data,
        type: "",
      }));
    }, 3000);
  },
}));

export default useSnackbar;
