import Fetch from "@/lib/core/base-api/base-api";
import url from "@/lib/core/url";
import { getErrorMessage } from "@/lib/helpers/request";

class FileService {
  public async uploadFile<T>(data: FormData) {
    try {
      const response = await Fetch.post<T>(url.files.upload, data, true);
      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(getErrorMessage(error) || "Failed to upload file");
    }
  }
}
const fileService = new FileService();
export default fileService;
