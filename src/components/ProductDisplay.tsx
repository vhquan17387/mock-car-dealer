import React, { useState } from "react";

import ProductThumbnail from "./ProductThumbnail";

import s from "./Product.module.css";
import Banner from "./Banner";
import { Modal } from "@mantine/core";
import { IconMaximize } from "@tabler/icons-react";
export default function ProductDisplay(props) {
  const { product } = props;
  const [opened, setOpened] = useState(false);

  return (
    <div
      className={`${s.productDisplayWrapper} ${props?.lb && s.lbx}`}
      style={{ position: "relative" }}
    >
      <Banner
        images={[product?.imageUrl, ...product?.images] || []}
        height={400}
        onclick={() => {
          setOpened(true);
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          color: "black",
        }}
      >
        <IconMaximize
          height={"30px"}
          width={"30px"}
          color="white"
          onClick={() => setOpened(true)}
        />
      </div>
      <Modal
        opened={opened}
        padding={0}
        withCloseButton={false}
        onClose={() => setOpened(false)}
        size="auto"
      >
        <Banner
          images={[product?.imageUrl, ...product?.images] || []}
          fullScreen
          backgroundColor={"#000"}
          imageProps={{
            style: {
              objectFit: "contain", // Ensures the image fills the space
              height: "100vh",
            },
          }}
        />
      </Modal>
    </div>
  );
}

ProductDisplay.defaultProps = {
  lb: false,
};
