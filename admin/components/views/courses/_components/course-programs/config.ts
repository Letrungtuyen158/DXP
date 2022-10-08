import * as yup from "yup";

export const mapPropsToValues = (props: any) => {
  return {
    value: props?.defaultData?.value || "",
    description: props?.defaultData?.description || "",
    detail: props?.defaultData?.detail || "",
    name: props?.defaultData?.name || "",
    participants: props?.defaultData?.participants || "",
    files: props?.defaultData?.mediaContents || "",
    commitment: props?.defaultData?.commit || "",
    listImgDelete: [],
    banner: props?.defaultData?.banner || "",
  };
};

export const validationSchema = yup.object().shape({
  value: yup.string().trim().test("", "Required", function (value: any) {
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
  description: yup.string().trim().required("Required"),
  detail: yup.string().trim().test("", "Required", function (value: any) {
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
  name: yup.string().trim().required("Required"),
  participants: yup.string().trim().test("", "Required", function (value: any) {
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
  commitment: yup.string().trim().test("", "Required", function (value: any) {
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
  banner: yup.mixed().required("Required"),
});
