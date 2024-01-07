import * as React from "react";

const useNetworkInfo = () => {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);

  const handleNetworkChange = () => setIsOnline(navigator.onLine);

  React.useEffect(() => {
    window.addEventListener("offline", handleNetworkChange);
    window.addEventListener("online", handleNetworkChange);

    return () => {
      window.removeEventListener("offline", handleNetworkChange);
      window.removeEventListener("online", handleNetworkChange);
    };
  }, []);

  return isOnline;
};

export default useNetworkInfo;
