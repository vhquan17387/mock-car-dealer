import React from "react";
// import Modal from "../UI/Modal";
import MenuList from "./MenuList";

import s from "./Nav.module.css";
import { Drawer, Modal } from "@mantine/core";

export default function PanelNavMenu({ onClick }) {
  return (
    <Drawer opened onClose={onClick}>
      <div className={s.menuPanel}>
        <MenuList mob={true} />
      </div>
    </Drawer>
  );
}
