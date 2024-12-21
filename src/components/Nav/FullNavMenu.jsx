import React from "react";
import MenuList from './MenuList';

import s from "./Nav.module.css";

export default function NavMenu() {
  return (
    <div className={s.menu}>
      <MenuList />
    </div>
  );
}
