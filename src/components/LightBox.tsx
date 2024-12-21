import React, { useEffect } from "react";

import Modal from "./UI/Modal";
import ProductDisplay from "./ProductDisplay";
import useMyContext from "../hooks/useMyContext";
import LightboxContext from "../context/lightbox-context";

import s from "./LightBox.module.css";

export default function LightBox() {
  const { isLbShowing, onChange } = useMyContext(LightboxContext);

  const dismissModalHandler = () => {
    onChange(false);
  };

  useEffect(() => {
    function handleScroll() {
      if (isLbShowing) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }

    handleScroll();

    return () => (document.body.style.overflow = "auto");
  }, [isLbShowing]);

  return (
    <Modal onDismiss={dismissModalHandler}>
      <ProductDisplay lb="true" />
    </Modal>
  );
}
