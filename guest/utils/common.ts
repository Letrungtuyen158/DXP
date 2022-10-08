import { REGEX_VIETNAMESE_NAME } from "constants/common.constant";
import moment from "moment";
import useSWR from "swr";
export const getErrorMessage = (e: string) => {
  switch (e) {
    case "Invalid email or password.": {
      return "Invalid email or password!";
    }
    default: {
      return "Something wrong!";
    }
  }
};

export const checkApiStatus = (res: any) => {
  if (res.ok && (res.status === 200 || res.status === 204)) {
    return true;
  }

  return false;
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const formatDate = (date: any): string => moment(date).format("DD/MM/YYYY");

const regex = /(<([^>]+)>)/gi;
export const formatContent = (text: any): any => text?.replace(regex, "");

export const handleHashtag = (text: string) => text.split(",");

export const formatContentView = (text: any, count: number) =>
  text?.length > count ? text?.slice(0, count) + "..." : text;

export const getDataSWR = (filter: any, pathApi: any) => {
  const queryString = `${pathApi}?filter=${JSON.stringify(filter)}`;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useSWR(queryString, fetcher);
};

export const validateName = (value: string) => {
  let errorMessage;
  if (!REGEX_VIETNAMESE_NAME.test(value)) {
    errorMessage = "Tên không hợp lệ";
  }
  return errorMessage;
};

export function convertToSlug(title: any) {
  let slug = title.toLowerCase();
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
  slug = slug.replace(/đ/gi, 'd');
  slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
  slug = slug.replace(/ /gi, "-");
  slug = slug.replace(/\-\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-\-/gi, '-');
  slug = slug.replace(/\-\-\-/gi, '-');
  slug = slug.replace(/\-\-/gi, '-');
  slug = '@' + slug + '@';
  slug = slug.replace(/\@\-|\-\@|\@/gi, '');
  return slug;
}
