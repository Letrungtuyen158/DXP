import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const ToastError = (title: string) =>
  Toast.fire({
    icon: "error",
    title: title,
  });

export const ToastSuccess = (title: string) =>
  Toast.fire({
    icon: "success",
    title: title,
  });
