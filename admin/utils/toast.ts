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

export const AlertConfirm = ({ onOk }: { onOk: () => void }) =>
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      onOk();
    }
  });
