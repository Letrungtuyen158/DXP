import * as yup from "yup";
import { POST_TYPE, STATUS_POST } from "constants/Sharing.constant";
import moment from "moment";

export const mapPropsToValues = (props: any) => {
  return {
    sharingAt: moment(props.defaultData?.sharingAt).format("yyyy-MM-DD") || "",
    title: props?.defaultData?.title || "",
    content: props?.defaultData?.content || "",
    status: props?.defaultData?.status == STATUS_POST.SHOW ? true : false,
    type: props?.defaultData?.type || POST_TYPE.NORMAL,
    tag: props?.defaultData?.tag || "",
    filesPost: props?.defaultData?.mediaContent || null,
    files: null,
    slug: props?.defaultData?.slug || "",
    createdAt:
      moment(props?.defaultData?.createdAt).format("yyyy-MM-DD") || moment().format("yyyy-MM-DD"),
  };
};

export const validationSchema = yup.object().shape({
  sharingAt: yup.string().trim().required("Required"),
  title: yup.string().trim().required("Required"),
  slug: yup.string().trim().required("Required"),
  filesPost: yup.mixed().required("Required"),
  content: yup.string().trim().test("", "Required", function (value: any) {
    const regex = /(<([^>]+)>)/gi;
    const contents = value?.replace(regex, "")?.trim();
    if (value?.includes("<img") || contents?.length !== 0) {
      return true
    }
    if (contents?.length === 0 && !value.includes("<img")) {
      return false
    }
    return false
  }),
});
