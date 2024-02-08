export type ResponseType<type = "success" | "error", T> = {
  message: string;
  statusCode: number;
  //   data returned if type is success but not returned if type is error
  data?: T;
  //   data returned if type is error but not returned if type is success
  error?: T;
};
