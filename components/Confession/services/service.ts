import Fetch from "@/lib/core/base-api/base-api";
import { Params } from "@/lib/core/base-api/type";
import url from "@/lib/core/url";
import { createConfessionDto } from "../type";
import { getFinalURLWithParams } from "@/lib/helpers/request";
import useAuth from "@/lib/global/Auth/useAuthentication";

class ConfessionService {
  public async getConfessions<T>(params: Params[]) {
    try {
      const finalUrlWithParams = getFinalURLWithParams(url.confession.getAllConfession, params);
      const response = await Fetch.get<T>(finalUrlWithParams);
      return response.data;
    } catch (error) {
      return {
        data: [],
        meta: {
          total: 0,
          page: 0,
          limit: 0,
        },
      };
    }
  }

  public async getConfessionById<T>(id: string) {
    try {
      const response = await Fetch.get<T>(`${url.confession.basicRoute}${id}`);
      return response.data;
    } catch (error: any) {
      console.log(error);
    }
  }

  public async createConfession<T>(data: createConfessionDto) {
    try {
      const response = await Fetch.post<T>(url.confession.create, data);
      if (response.status === 201 || response.status === 200) {
        return response.data;
      } else {
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  public async updateConfession<T>(id: string, data: createConfessionDto) {
    try {
      const response = await Fetch.patch<T>(`${url.confession.basicRoute}${id}`, data);
      return response.data;
    } catch (error: any) {
      console.log(error);
    }
  }

  public async deleteConfession<T>(id: string) {
    try {
      const response = await Fetch.delete<T>(`${url.confession.basicRoute}${id}`);
      return response.data;
    } catch (error: any) {
      console.log(error);
    }
  }

  public async likeConfession(confession_id: number, is_liked: boolean) {
    const { isLogIn, user } = useAuth.getState();
    try {
      const response = await Fetch.post<any>(`${url.confession.setLike}`, {
        is_liked,
        confession_id,
        user_id: isLogIn ? user.id : user.tempId,
      });
      return response;
    } catch (error: any) {
      console.log(error);
      return error.response;
    }
  }

  public async getConfessionByRoomId<T>(roomId: number) {
    try {
      const response = await Fetch.get<T>(`${url.confession.basicRoute}${roomId}`);
      return response.data;
    } catch (error: any) {
      console.log(error);
    }
  }
}
const confessionService = new ConfessionService();
export default confessionService;
