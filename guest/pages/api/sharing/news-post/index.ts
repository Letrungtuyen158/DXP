import { ToastError } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import Api from "services/api";

async function handler(req: any, res: any) {
  const { query } = req;
  const filter = query?.filter ? JSON.parse(query?.filter) : {};

  try {
    const result = await Api.getSharings(filter);
    if (checkApiStatus(result)) {
      return res.status(200).json(result?.data);
    }
  } catch (error) {
    ToastError(getErrorMessage(res.error));
  }
}

export default handler;
