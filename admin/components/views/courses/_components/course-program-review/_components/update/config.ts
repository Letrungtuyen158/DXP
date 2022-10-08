import * as yup from "yup";

export const validationSchema = yup.object().shape({
    courseProgramId: yup.string().required("Required"),
    reviewerName: yup.string().required("Required"),
    reviewAt: yup.string().required("Required"),
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
