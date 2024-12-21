import React, { useState } from "react";

import * as assets from "../../assets/index.js";
import FullNavMenu from "./FullNavMenu.jsx";
import Hamburger from "./Hamburger.jsx";
import { Image } from "@mantine/core";
import s from "./Nav.module.css";
import useMyContext from "../../hooks/useMyContext.js";

export default function Nav() {
  const context = useMyContext("Nav");
  return (
    <nav className={`${s.navWrapper}`}>
      <div className={s.navLft}>
        <div className={s.logo}>
          <Image src={assets.logo} alt="Company logo." />
        </div>
        <Hamburger />
        <FullNavMenu />
      </div>
      <div className={s.navRht}>
        <div className={s.profile}>
          <img src={assets.not_login} alt="Profile image" />
        </div>
        <div className={s.loginText}>
          <span>Login</span>
        </div>
      </div>
    </nav>
  );
}
