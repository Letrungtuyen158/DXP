import { BASE_API } from "../constants";
import { IBooking, IContanct, Ilogin, Icomment } from "./api.type";
import apisauce from "apisauce";

const create = () => {
  const api = apisauce.create({
    baseURL: BASE_API,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });

  const apiLocal = apisauce.create({
    baseURL: "",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    timeout: 10000,
  });

  const login = (data: Ilogin) => api.post("users/login", data);

  const getNews = (filter: any) => api.get("/news", filter);
  const getFounders = (filter?: any) => api.get("/founders", filter);
  const getNewsById = (id: number) => api.get(`/news/${id}`);
  const getReviews = (filter: any) => api.get("/reviews", filter);
  const getVideo = (filter: any) => api.get("/media-contents/utopia/video", filter);
  const postContacts = (data: IContanct) => api.post("/contacts", data);
  const postBookings = (data: IBooking) => api.post("/bookings", data);
  const getNewDetailBySlug = (slug: string) => api.get(`/news-detail/${slug}`);
  const getPhotos = (filter: any) => api.get("/media-contents/dxp/photo", filter);
  const getPhotosLocal = (filter: any) => apiLocal.get("/api/introduct", filter);
  const getAboutMe = (filter: any) => api.get("/reviews", filter);
  const getVideoGalary = (filter: any) => api.get("/media-contents/dxp/video", filter);

  const getCourseBanner = (filter: any) => api.get(`/media-contents`, filter);

  const getCourseProgram = (filter?: any) => api.get(`course-programs`, filter);
  const getCourseProgramById = (id: number, filter: any) => api.get(`course-programs/${id}`, filter);

  //review
  //comment
  const postCommentSharings = (data: Icomment) => api.post(`/comments`, data);
  const getCommentSharing = (filter: any) => api.get(`/comments`, filter);
  //sharings
  const getSharings = (filter: any) => api.get("/sharings", filter);
  const getDetailById = (id: number) => api.get(`/sharings/${id}`);

  return {
    login,
    getNews,
    getFounders,
    getNewsById,
    getReviews,
    postContacts,
    postBookings,
    getVideo,
    getPhotos,
    getPhotosLocal,
    getNewDetailBySlug,
    getAboutMe,
    getCourseProgram,
    getCourseProgramById,
    getCourseBanner,
    //comment
    postCommentSharings,
    getCommentSharing,
    //sharings
    getSharings,
    getDetailById,
    //galary
    getVideoGalary,
  };
};
const Api = create();

export default Api;
