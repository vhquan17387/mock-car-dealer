import React, { useState } from "react";
import MenuIcon from "../../icons/MenuIcon.jsx";
import PanelNavMenu from "./PanelNavMenu";

import s from "./Nav.module.css";
import { Burger, Drawer } from "@mantine/core";
import MenuList from "./MenuList.js";
import { useDisclosure } from "@mantine/hooks";

export default function Hamburger() {
  const [showPanel, setShowPanel] = useState(false);
  const [opened, { toggle }] = useDisclosure();
  const clickHandler = () => {
    setShowPanel(!showPanel);
    toggle();
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Burger
        opened={opened}
        onClick={clickHandler}
        aria-label="Toggle navigation"
        hiddenFrom="md"
      />
      <Drawer opened={showPanel} onClose={clickHandler}>
        <div className={s.menuPanel}>
          <MenuList mob={true} />
        </div>
      </Drawer>
    </div>
  );
}
