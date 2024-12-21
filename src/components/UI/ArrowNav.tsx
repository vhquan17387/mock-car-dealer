import React from "react";
import NextIcon from "../../icons/NextIcon";
import PreviousIcon from "../../icons/PreviousIcon";

import s from "./ArrowNav.module.css";

export default function ArrowNav(props) {
  let currentIndex = props.currentIndex - 1;

  const prevHandler = () => {
    let prevIndex = ((currentIndex - 1 + 4) % 4) + 1;
    props.onSelect(prevIndex);
  };

  const nextHandler = () => {
    let nxtIndex = ((currentIndex + 1) % 4) + 1;
    props.onSelect(nxtIndex);
  };

  return (
    <>
      <span
        className={`${props?.prev || s.previous} ${props?.cs} ${s.arrowNav}`}
        onClick={prevHandler}
      >
        <PreviousIcon />
      </span>
      <span
        className={`${props.nxt || s.next} ${props?.cs} ${s.arrowNav}`}
        onClick={nextHandler}
      >
        <NextIcon />
      </span>
    </>
  );
}
