import * as Yup from "yup";
import moment from "moment";

export const mapPropsToValues = (props: any) => {
  return {
    reviewerName: props?.defaultData?.reviewerName || "",
    reviewAt: moment(props?.defaultData?.reviewAt).format("yyyy-MM-DD") || "",
    content: props?.defaultData?.content || "",
    ownerAvatar: props.defaultData?.ownerAvatar || "",
    mediaContents: props.defaultData?.mediaContents || "",
    avatar: null,
    idDeleteImg: [],
    listFiles: [],
    createdAt:
      moment(props?.defaultData?.createdAt).format("yyyy-MM-DD") || moment().format("yyyy-MM-DD"),
  };
};

export const validationSchema = Yup.object().shape({
  reviewerName: Yup.string().trim().required("require"),
  reviewAt: Yup.string().required("require"),
  content: Yup
    .string()
    .trim()
    .test("", "Required", function (value: any) {
      const regex = /(<([^>]+)>)/gi;
      const contents = value?.replace(regex, "")?.trim();
      if (value?.includes("<img") || contents?.length !== 0) {
        return true;
      }
      if (contents?.length === 0 && !value.includes("<img")) {
        return false;
      }
      return false;
    }),
});
