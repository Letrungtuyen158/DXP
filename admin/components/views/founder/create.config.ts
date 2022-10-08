import * as yup from 'yup';

export const mapPropsToValues = (props: any) => {
    return {
        branding: props?.defaultData?.branding || "",
        url: props?.defaultData?.url || "",
        content: props?.defaultData?.content || "",
        logoImg: props?.defaultData?.logoImg || null,
        fileAvatar: props?.defaultData?.mediaContents[0] || null,
        listIdImgDelete: [],
        avatar: null,
        logo: null
    };
};

export const validationSchema = yup.object().shape({
    branding: yup.string().required("Required"),
    url: yup.string().required("Required"),
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
    logoImg: yup.mixed().required("Required"),
    fileAvatar: yup.mixed().required("Required")
});
