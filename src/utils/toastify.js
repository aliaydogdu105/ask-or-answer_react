import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Toastify = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 1111,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export default Toastify;
