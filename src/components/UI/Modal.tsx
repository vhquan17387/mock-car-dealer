import React from "react";
import { createPortal } from "react-dom";

import CloseIcon from "../../icons/CloseIcon";

import s from "./Modal.module.css";

function Overlay() {
  return <div className={`${s.overlay}`}></div>;
}

function OverlayContent({ children, mob, onDismiss }) {
  return (
    <>
      <Overlay />
      <div className={`${s.overlayContent} ${mob ? s.mob : ""}`}>
        <span className={s.dismiss} onClick={onDismiss} typeof={`button`}>
          <CloseIcon fill={mob ? `rgb(104, 112, 125)` : `#fff`} />
        </span>
        {children}
      </div>
    </>
  );
}

export default function Modal({ children, isMob, onDismiss }) {
  return createPortal(
    <OverlayContent mob={isMob} onDismiss={onDismiss}>
      {children}
    </OverlayContent>,
    document.querySelector("#overlay")
  );
}

Modal.defaultProps = {
  isMob: false,
};
