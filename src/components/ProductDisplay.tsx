import React, { useState } from "react";

import ProductThumbnail from "./ProductThumbnail";

import s from "./Product.module.css";
import Banner from "./Banner";
export default function ProductDisplay(props) {
  const [selectedItem, setSelectedItem] = useState(1);

  return (
    <div className={`${s.productDisplayWrapper} ${props?.lb && s.lbx}`}>
      <Banner images={[]} />
      <div className={`${s.thumbnailWrapper}`}>
        {Array.from({ length: 4 }).map((_, idx) => {
          const item = idx + 1;

          return (
            <ProductThumbnail
              item={item}
              key={idx}
              selected={selectedItem}
              onSelect={setSelectedItem}
            />
          );
        })}
      </div>
    </div>
  );
}

ProductDisplay.defaultProps = {
  lb: false,
};
