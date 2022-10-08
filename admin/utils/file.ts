import moment from "moment";

export function getSize(size: number) {
  const kiloBytes = 1024;
  const decimal = 3;
  return (size / kiloBytes).toFixed(decimal) + " KB";
}
const allowedEventList = ["Enter", " "];
export const formatTag = (text: string) => text.replace(/[^a-zA-Z]/g, "");
export const checkEvent = (e: any) => allowedEventList.includes(e);
export const formatTagStr = (list: []) => list.join(",");

export const formatDate = (date: string) => moment(date).format("DD/MM/YYYY");
export const regexContent = /(<([^>]+)>)/gi;
export const formatSizeMb = (size: number) => (size / (1024 * 1024)).toFixed(1) + " MB";

export const formatContentView = (text: any, count: number) =>
  text?.length > count ? text?.slice(0, count) + "..." : text;

export const regex = /(<([^>]+)>)/gi;
export const formatContent = (text: any): any => text?.replace(regex, "");
