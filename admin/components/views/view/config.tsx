import * as yup from "yup";
import moment from "moment";
export const mapPropsToValues = (props: any) => {
  return {
    title: props?.defaultData?.title || "",
    content: props?.defaultData?.content || "",
    url: props?.defaultData?.url || "",
    author: props?.defaultData?.author || "",
    newspaper: props?.defaultData?.newspaper || "",
    type: props?.defaultData?.type || "NORMAL",
    newsAt: moment(props?.defaultData?.newsAt).format("yyyy-MM-DD") || "",
    status: props?.defaultData?.status || "SHOW",
    files: props?.defaultData?.mediaContent || "",
    idDelete: null,
    slug: props?.defaultData?.slug || "",
    createdAt:
      moment(props?.defaultData?.createdAt).format("yyyy-MM-DD") || moment().format("yyyy-MM-DD"),
  };
};

export const validationSchema = yup.object().shape({
  title: yup.string().trim().required("require"),
  content: yup
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
  url: yup.string().trim().required("require"),
  author: yup.string().trim().required("require"),
  newspaper: yup.string().trim().required("require"),
  newsAt: yup.string().trim().required("require"),
  files: yup.mixed().required("require"),
  slug: yup.string().trim().required("require"),
});
