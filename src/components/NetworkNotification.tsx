import * as React from "react";

import toastOfflineInfo from "../utils/toastOfflineInfo";
import toastOnlineInfo from "../utils/toastOnlineInfo";

const NetworkNotification = () => {
  const handleOffline = () => toastOfflineInfo();

  const handleOnline = () => toastOnlineInfo();

  React.useEffect(() => {
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return null;
};

export default NetworkNotification;
