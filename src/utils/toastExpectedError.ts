import { toast } from "react-toastify";

const doToast = (ex: any) => {
  const expectedError =
    ex.response && ex.response.status >= 400 && ex.response.status < 500;

  if (expectedError)
    toast.error(
      ex.response.data.message ? ex.response.data.message : ex.response.data[0]
    );
};

export default doToast;
