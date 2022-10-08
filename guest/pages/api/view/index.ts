import { ToastError } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import Api from "services/api";
export default async function handler(req: any, res: any) {
  const { query } = req;
  const filter = query?.filter ? JSON.parse(query?.filter) : {};
  try {
    const result = await Api.getNews(filter);
    if (checkApiStatus(result)) {
      return res.status(200).json(result?.data);
    }
  } catch (error) {
    ToastError(getErrorMessage(res.error));
  }
}
