import apisauce from "apisauce";

import { BASE_API } from "../constants";

const create = () => {
  const api = apisauce.create({
    baseURL: BASE_API,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    timeout: 10000,
  });

  const apiUpload = apisauce.create({
    baseURL: BASE_API,
    headers: {
      Accept: "application/json",
    },
    timeout: 10000,
  });
  const apiUploadImg = apisauce.create({
    baseURL: BASE_API,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
    timeout: 10000,
  });

  // User
  const getUserMe = (token: string) => {
    api.setHeader("Authorization", `Bearer ${token}`);
    apiUpload.setHeader("Authorization", `Bearer ${token}`);
    apiUploadImg.setHeader("Authorization", `Bearer ${token}`);
    return api.get("users/me");
  };
  const getUsers = (filter: any) => api.get("/users", filter);
  const postUser = (data: any) => api.post(`/users`, data);
  const getUserById = (id: number) => api.get(`/users/${id}`);
  const patchUserById = (id: number, data: any) => api.patch(`/admin/users/${id}`, data);
  const deleteUserById = (id: number) => api.delete(`/admin/users/${id}`);

  // Courses
  const getCourseProgram = (filter?: any) => api.get(`course-programs`, filter);
  const createCourseProgram = (data: any) => api.post(`/course-programs`, data);
  const deleteCourseProgram = (id: number) => apiUpload.delete(`/course-programs/${id}`);
  const updateCourseProgram = (id: number, data: any) => api.patch(`course-programs/${id}`, data);
  const getCourseProgramById = (id: number, filter: any) =>
    api.get(`course-programs/${id}`, filter);
  const createCourse = (data: any) => api.post(`/courses`, data);
  const uploadCourseImg = (id: number, files: any) =>
    apiUploadImg.post(`/media-contents/course-program/${id}`, files);
  const uploadBanner = (id: number, files: any) =>
    apiUploadImg.post(`/course-program/banner/${id}`, files);
  const getCourses = (filter: any) => api.get("/courses", filter);
  const getCourseById = (id: number) => api.get(`/courses/${id}`);
  const updateCourse = (id: number, data: any) => api.patch(`courses/${id}`, data);
  const deleteCourse = (id: number) => apiUpload.delete(`/courses/${id}`);
  //Courses Banner
  const getCourseBanner = (filter: any) => api.get(`/media-contents`, filter);
  const createBanner = (data: any) => apiUploadImg.post(`/media-contents/course-banner`, data);

  //contact
  const getContacts = (filter: any) => api.get("/contacts", filter);
  const getContactById = (id: number) => api.get(`/contacts/${id}`);
  const deleteContactById = (id: number) => apiUpload.delete(`/contacts/${id}`);
  const updateContactStatus = (id: number, data: any) => api.patch(`/contacts/${id}`, data);
  // Sharing
  const getPostSharing = (filter: any) => api.get("/sharings", filter);
  const patchStatusSharingById = (id: number, data: any) => api.patch(`/sharings/${id}`, data);
  const deletePostSharingById = (id: number) => api.delete(`/sharings/${id}`);
  const createPostSharing = (data: any) => api.post("/sharings", data);
  const updatePostSharing = (id: number, data: any) => api.patch(`/sharings/${id}`, data);
  const getPostSharingById = (id: number) => api.get(`/sharings/${id}`);
  const updatePhotoSharingById = (id: number, data: any) =>
    apiUploadImg.post(`/media-contents/sharing/${id}`, data);
  // Comment
  const getCommentSharing = (filter: any) => api.get("/comments", filter);
  const patchStatusCommentById = (id: number, data: any) => api.patch(`/comments/${id}`, data);
  const deleteCommentById = (id: number) => api.delete(`/comments/${id}`);

  // reviews
  const getReviews = (filter: any) => api.get(`/reviews`, filter);
  const createReview = (data: any) => api.post(`/reviews`, data);
  const deleteReviews = (id: number) => api.delete(`/reviews/${id}`);
  const getReviewById = (id: number) => api.get(`/reviews/${id}`);
  const updateReview = (id: number, data: any) => api.patch(`/reviews/${id}`, data);
  const uploadReviewAvatar = (id: number, files: any) =>
    apiUploadImg.post(`/media-contents/review-avatar/${id}`, files);
  const uploadReviewImg = (id: number, files: any) =>
    apiUploadImg.post(`/media-contents/review/${id}`, files);
  //news
  const getNewspaper = (filter: any) => api.get(`/news`, filter);
  const updateNewspaper = (id: number, data: any) => api.patch(`/news/${id}`, data);
  const deleteNewspaper = (id: number) => api.delete(`/news/${id}`);
  const getNewspaperById = (id: number) => api.get(`/news/${id}`);
  const createNewspaper = (data: any) => api.post(`/news`, data);
  const uploadNewspaperImg = (id: number, files: any) =>
    apiUploadImg.post(`/media-contents/news/${id}`, files);

  //registration
  const getRegistrationList = (filter: any) => api.get(`/bookings`, filter);
  const deleteRegistration = (id: number) => api.delete(`/bookings/${id}`);
  const updateRegistrationStatus = (id: number, data: any) => api.patch(`/bookings/${id}`, data);

  //video
  const getVideos = (filter: any) => api.get(`/media-contents/dxp/video`, filter);
  const deleteVideo = (id: number) => api.delete(`/media-contents/${id}`);
  const createVideo = (name: string, data: any) =>
    apiUploadImg.post(`/media-contents/dxp/video/${name}`, data);
  const patchVideo = (id: number, data: any) => api.patch(`/media-contents/${id}`, data);

  // image
  const getImages = (filter: any) => api.get(`/media-contents/dxp/photo`, filter);
  const deleteImage = (id: number) => api.delete(`/media-contents/${id}`);
  const createImage = (data: any) => apiUploadImg.post(`/media-contents/dxp/photo`, data);
  const patchImage = (id: number, data: any) => api.patch(`/media-contents/${id}`, data);

  //founder
  const getFounders = (filter: any) => api.get(`/founders`, filter);
  const deleteFounderById = (id: number) => api.delete(`/founders/${id}`);
  const patchFounder = (id: number, data: any) => api.patch(`/founders/${id}`, data);
  const postFounder = (data: any) => api.post(`/founders`, data);
  const getFounderById = (id: number) => api.get(`/founders/${id}`);
  const postFounderImg = (id: number, data: any, type: string) =>
    apiUploadImg.post(`/media-contents/founder/${id}/${type}`, data);

  return {
    // USER
    getUserMe,
    getUsers,
    postUser,
    getUserById,
    patchUserById,
    deleteUserById,

    //CONTACTS
    getContacts,
    getContactById,
    deleteContactById,
    updateContactStatus,

    // COURSES
    createCourseProgram,
    getCourseProgram,
    deleteCourseProgram,
    updateCourseProgram,
    getCourseProgramById,
    getCourseBanner,
    createBanner,

    //SHARING
    getPostSharing,
    patchStatusSharingById,
    deletePostSharingById,
    createPostSharing,
    updatePostSharing,
    getPostSharingById,
    updatePhotoSharingById,

    //COMMENT
    getCommentSharing,
    patchStatusCommentById,
    deleteCommentById,

    // COURSE
    createCourse,
    uploadCourseImg,
    getCourses,
    deleteCourse,
    getCourseById,
    updateCourse,
    uploadBanner,

    //NEWSpaper
    getNewspaper,
    getNewspaperById,
    deleteNewspaper,
    updateNewspaper,
    createNewspaper,
    uploadNewspaperImg,

    //REVIEWS
    getReviews,
    createReview,
    deleteReviews,
    getReviewById,
    updateReview,
    uploadReviewAvatar,
    uploadReviewImg,

    //registration
    getRegistrationList,
    deleteRegistration,
    updateRegistrationStatus,

    //VIDEO
    getVideos,
    createVideo,
    deleteVideo,
    patchVideo,

    //image
    getImages,
    deleteImage,
    createImage,
    patchImage,

    //founder
    getFounders,
    deleteFounderById,
    patchFounder,
    postFounder,
    getFounderById,
    postFounderImg,
  };
};
const Api = create();

export default Api;
