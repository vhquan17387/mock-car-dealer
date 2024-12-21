import React, { useState } from "react";
import MenuIcon from "../../icons/MenuIcon.jsx";
import PanelNavMenu from "./PanelNavMenu";

import s from "./Nav.module.css";

export default function Hamburger() {
  const [showPanel, setShowPanel] = useState(false);

  const clickHandler = () => {
    console.log("show menu panel");
    setShowPanel(!showPanel);
  };

  return !showPanel ? (
    <div
      className={`${s.mobMenu}`}
      onClick={clickHandler}
    >
      <MenuIcon />
    </div>
  ) : (
    <PanelNavMenu onClick={clickHandler} />
  );
}
