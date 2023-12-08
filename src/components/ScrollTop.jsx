import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const scrollTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
};

export default scrollTop;

// Hehe, bikinan gw sendiri nih bos 