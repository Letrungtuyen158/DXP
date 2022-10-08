import { FormikBag, FormikProps, withFormik } from "formik";
import { REVIEW_COURSE } from "constants/review.constants";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { mapPropsToValues } from "../config";
import { omit } from "ramda";
import { validationSchema } from "./config";
import { withRouter } from "next/router";
import Api from "services/api";
import ReviewUpdateForm from "./update.view";
import Swal from "sweetalert2";

interface IForm {
  courseProgramId: number;
  reviewerName: string;
  content: string;
  reviewAt: string;
  avatar: any;
  files: any;
  fileAvatar: any;
  idDeleteImg: any;
  listFiles: any;
}

export type IProps = FormikProps<IForm>;

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  enableReinitialize: true,
  handleSubmit: async (values: IForm, formikBag: FormikBag<any, IForm>) => {
    Swal.showLoading();
    const { defaultData, router } = formikBag.props;
    const { id } = defaultData;
    const avatar = new FormData();
    avatar.append("avatar", values.fileAvatar);
    const files = new FormData();
    for (let i = 0; i < values.listFiles.length; i++) {
      files.append("files", values.listFiles[i]);
    }
    const listImgDelete = values.idDeleteImg;
    const unique: any = Array.from(new Set(listImgDelete));
    const data = omit(["files", "avatar", "fileAvatar", "idDeleteImg", "listFiles"], {
      ...values,
      reviewAt: new Date(values.reviewAt).toISOString(),
      courseProgramId: Number(values.courseProgramId),
      type: REVIEW_COURSE,
    });

    try {
      const res: any = await Api.updateReview(id, data);
      if (checkApiStatus(res)) {
        const [result, result2]: any = await Promise.all([
          Api.uploadReviewAvatar(id, avatar),
          Api.uploadReviewImg(id, files),
        ]);
        for (let i = 0; i < unique.length; i++) {
          await Api.deleteImage(unique[i]);
        }
        if (checkApiStatus(result) && checkApiStatus(result2)) {
          ToastSuccess("Cập nhật review thành công");
          router.back();
        } else {
          ToastError("cập nhập review thất bại");
        }
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});

export default withRouter(MyEnhancedForm(ReviewUpdateForm));
