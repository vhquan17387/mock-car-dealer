import React, { useEffect, useState } from "react";
import * as assets from "../assets/index";

import s from './Product.module.css';

export default function ProductThumbnail({ item, selected, onSelect }) {
  const imageSelectHandler = e => {
    onSelect(parseInt(e.target.id));
  };
 
  return (
    <div
      id={item}
      className={`${s.productThumbnail} ${selected===item ? s.active : ''}`}
      style={{ backgroundImage: `url(${assets['prod_' + item + "_thumb"]})` }}
      onClick={imageSelectHandler}
    ></div>
  );
}
