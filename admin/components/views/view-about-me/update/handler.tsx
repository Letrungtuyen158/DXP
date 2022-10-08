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

interface Ivalues {
  reviewerName: string;
  reviewAt: string;
  content: string;
  mediaContents: any;
  ownerAvatar: any;
  idDeleteImg: any;
  avatar: any;
  listFiles: any;
  createdAt: any;
}
export type IProps = FormikProps<Ivalues>;

const EnhanceForm = withFormik({
  mapPropsToValues,
  validationSchema,
  enableReinitialize: true,
  handleSubmit: async (values: Ivalues, formikBag: FormikBag<any, Ivalues>) => {
    const { router, id } = formikBag.props;
    const ownerAvatar = new FormData();
    ownerAvatar.append("ownerAvatar", values.avatar);
    const mediaContents = new FormData();
    Object.values(values.listFiles).map((item: any) => {
      mediaContents.append("files", item);
    });
    const listImgDelete = values.idDeleteImg;
    const unique: any = Array.from(new Set(listImgDelete));
    const data = omit(["ownerAvatar", "mediaContents", "avatar", "idDeleteImg", "listFiles"], {
      ...values,
      reviewAt: moment(values.reviewAt),
      type: REVIEW_ABOUT_ME,
      createdAt: moment(values?.createdAt),
    });
    Swal.showLoading();
    try {
      const res: any = await Api.updateReview(id, data);
      if (checkApiStatus(res)) {
        const [res1, res2] = await Promise.all([
          Api.uploadReviewAvatar(id, ownerAvatar),
          Api.uploadReviewImg(id, mediaContents),
        ]);
        for (let i = 0; i < unique.length; i++) {
          await Api.deleteImage(unique[i]);
        }

        if (checkApiStatus(res1) && checkApiStatus(res2)) {
          ToastSuccess("Cập nhật review thành công");
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
