import React, { memo } from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing, children }: { isShowing: boolean; children: any }) => {
  return isShowing
    ? ReactDOM.createPortal(<React.Fragment>{children}</React.Fragment>, document.body)
    : null;
};
export default memo(Modal);
