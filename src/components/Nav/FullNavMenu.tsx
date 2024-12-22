import React from "react";

import s from "./Nav.module.css";
import MenuList from "./MenuList";

export default function NavMenu() {
  return (
    <div className={s.menu}>
      <MenuList mob={true} />
    </div>
  );
}
