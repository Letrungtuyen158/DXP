import { ToastError } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import Api from "services/api";

const handler = async (req: any, res: any) => {
  const { query } = req;
  const filter = query?.filter ? JSON.parse(query?.filter) : {};
  try {
    const result = Api.getSharings(filter);
    if (checkApiStatus(result)) {
      return res.status(200).json(result);
    }
  } catch (error) {
    ToastError(getErrorMessage(res.error));
  }
};
export default handler;
