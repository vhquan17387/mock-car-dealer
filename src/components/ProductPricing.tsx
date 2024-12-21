import React, { useEffect, useState } from "react";

import { getPrice } from "../helpers/utils";

import s from "./Product.module.css";

export default function ProductPricing({ item }) {
  const [isSale, setIsSale] = useState(false);

  const salePercent = `${Math.floor(item.sale * 100)}%`;

  useEffect(() => {
    // False check on product pricing to determine sale
    // would occur via property check on product data
    item?.sale !== "" && setIsSale(true);
  }, []);

  return (
    <div className={s.priceWrapper}>
      <div className={s.priceDiff}>
        <span className={s.price}>{getPrice(item.currentPrice)}</span>
        {isSale && <span className={s.discount}>{salePercent}</span>}
      </div>
      {isSale && (
        <span className={s.fullPrice}>{getPrice(item.fullPrice)}</span>
      )}
    </div>
  );
}
