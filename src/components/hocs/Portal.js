import { useEffect } from "react";
import { createPortal } from "react-dom";

const PortalMui = ({children}) => {
  const mount = document.getElementById("portal-root");
  const el = document.createElement("div");

  useEffect(() => {
    mount.prepend(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el)
};

export default PortalMui;