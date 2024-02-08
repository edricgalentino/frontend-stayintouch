import { Params } from "@/lib/core/base-api/type";
import { Notification } from "../type";
import Fetch from "@/lib/core/base-api/base-api";
import url from "@/lib/core/url";
import { getFinalURLWithParams } from "@/lib/helpers/request";

class NotificationService {
  /* @Type Notification
   */
  public async getAllNotification<T>(params: Params[]) {
    try {
      const finalUrlWithParams = getFinalURLWithParams(url.notification.getAllNotification, params);
      const response = await Fetch.get<T>(finalUrlWithParams);
      return response.data;
    } catch (error: any) {
      console.log(error);
      throw new Error(error.response.data.message || "Failed to get notifications data");
    }
  }

  /* @Type Notification
   */
  public async createNotification<T>(data: Notification): Promise<T> {
    try {
      const response = await Fetch.post<T>(url.notification.create, data);
      return response.data;
    } catch (error: any) {
      console.log(error);
      throw new Error(error.response.data.message || "Failed to create notification");
    }
  }

  /* @Type {
	message: string;
    data: Notification;
    status: number;
    }
   */
  public async markAsRead<T>(id: string): Promise<T> {
    try {
      const response = await Fetch.patch<T>(`${url.notification.basicRoute}${id}`);
      return response.data;
    } catch (error: any) {
      console.log(error);
      throw new Error(error.response.data.message || "Failed to mark as read notification");
    }
  }

  /* @Type {
	message: string;
    data: Notification[];
    status: number;
	}
   */
  public async markAllAsRead<T>(user_id: string): Promise<T> {
    try {
      const response = await Fetch.patch<T>(`${url.notification.markAllAsRead}${user_id}`);
      return response.data;
    } catch (error: any) {
      console.log(error);
      throw new Error(error.response.data.message || "Failed to mark all as read notification");
    }
  }
}

export default new NotificationService();
