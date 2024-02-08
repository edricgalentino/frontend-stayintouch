import { Params } from "@/lib/core/base-api/type";
import { AxiosError } from "axios";

export function getErrorMessage(error: unknown) {
  if (error instanceof AxiosError) return error?.response?.data.message;
  if (error instanceof Error) return error?.message;
  return String(error);
}

export function getFinalURLWithParams(url: string, params: Params[]) {
  let finalUrl = url;

  if (params && params.length > 0) {
    params?.map((item: any, mainIndex: number) => {
      // if key exist, add it to the finalUrl
      if (item) {
        Object?.keys(item)?.forEach((key, index) => {
          // only add ? if it is the first param
          if (index === 0 && mainIndex === 0) {
            finalUrl += `?${key}=${item[key]}`;
          } else {
            finalUrl += `&${key}=${item[key]}`;
          }
        });
      }
    });
  }
  return finalUrl;
}
