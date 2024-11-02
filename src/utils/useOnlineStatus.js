import { useEffect } from "react";
import { useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });

    return () => {
      window.addEventListener("offline", () => {
        setOnlineStatus(false);
      });
      window.addEventListener("online", () => {
        setOnlineStatus(true);
      });
    };
  }, []);
  console.log("Online status", onlineStatus);

  return onlineStatus;
};

export default useOnlineStatus;
