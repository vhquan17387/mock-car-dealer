import React from "react";
import { MENU } from "../../helpers/data";

import s from "./Nav.module.css";
import { useLocation } from "react-router-dom";

export default function MenuList({ mob }) {
  const location = useLocation(); // Get the location object
  const currentPath = location.pathname; // Extract the pathname
  return (
    <ul className={`noList ${mob ? s.mob : ""}`}>
      {MENU.map((item, i) => {
        return (
          <li key={`${item.text}-${i}`}>
            <a
              href={item.url}
              className={currentPath === item.url ? `${s.active}` : ""}
            >
              {item.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
