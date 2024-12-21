import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import React from "react";

export default function Banner(props) {
  const { images, height, fullScreen, imageProps, ...rest } = props;
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Carousel
      withIndicators
      height={fullScreen ? "100vh" : height || 300}
      width={fullScreen ? "100vw" : "auto"}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      withControls={false}
      loop={true}
      {...rest}
    >
      {images.map((item, index) => (
        <Carousel.Slide key={index}>
          <Image
            radius="md"
            src={item}
            height={fullScreen ? "100vh" : height || 300}
            style={{
              objectFit: "cover", // Ensures the image fills the space
              objectPosition: "center", // Centers the image
              width: fullScreen ? "100vw" : "100%",
              height: fullScreen ? "100vh" : height || 300,
            }}
            {...imageProps}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
