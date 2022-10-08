import { FormikBag, FormikProps, withFormik } from "formik";
import { REVIEW_ABOUT_ME } from "constants/review.constants";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { mapPropsToValues, validationSchema } from "../config";
import { omit } from "ramda";
import { withRouter } from "next/router";
import Api from "services/api";
import Swal from "sweetalert2";
import ViewaboutmeForm from "./form";
import moment from "moment";

interface IForm {
  reviewerName: string;
  reviewAt: string;
  content: string;
  mediaContents: any;
  ownerAvatar: any;
  createdAt: any;
}
export type IProps = FormikProps<IForm>;

const EnhanceForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit: async (values: IForm, formikBag: FormikBag<any, any>) => {
    const { router } = formikBag.props;
    const ownerAvatar = new FormData();
    ownerAvatar.append("ownerAvatar", values.ownerAvatar);
    const mediaContents = new FormData();
    Object.values(values.mediaContents).map((item: any) => {
      mediaContents.append("mediaContents", item);
    });
    const data = omit(["mediaContents", "ownerAvatar", "avatar", "idDeleteImg", "listFiles"], {
      ...values,
      reviewAt: moment(values.reviewAt),
      type: REVIEW_ABOUT_ME,
      createdAt: moment(values?.createdAt),
    });
    Swal.showLoading();
    try {
      const res: any = await Api.createReview(data);
      if (checkApiStatus(res)) {
        const { id } = res.data;
        const result1 = await Api.uploadReviewAvatar(id, ownerAvatar);
        const result2 = await Api.uploadReviewImg(id, mediaContents);
        if (checkApiStatus(result1) && checkApiStatus(result2)) {
          ToastSuccess("Tạo review thành công");
          router.back();
        }
      } else {
        ToastError(res.data.error.message);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});
export default withRouter(EnhanceForm(ViewaboutmeForm));
