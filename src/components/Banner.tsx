// import { Carousel } from "@mantine/carousel";
// import { Image } from "@mantine/core";
// import Autoplay from "embla-carousel-autoplay";
// import { useRef } from "react";
// export default function Banner() {
//   const autoplay = useRef(Autoplay({ delay: 2000 }));
//   return (
//     <Carousel
//       withIndicators
//       height={400}
//       slideSize="100%"
//       slideGap="md"
//       loop
//       align="start"
//       slidesToScroll={3}
//       withControls={false}
//       plugins={[autoplay.current]}
//       onMouseEnter={autoplay.current.stop}
//       onMouseLeave={autoplay.current.reset}
//     >
//       <Carousel.Slide>
//         <Image
//           radius="md"
//           h={400}
//           src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
//         />
//       </Carousel.Slide>
//       <Carousel.Slide>
//         <Image
//           radius="md"
//           h={400}
//           src="https://carro.co/_next/image?url=https%3A%2F%2Fcdn.carro.co%2Fstrapi-webs%2F12_Dec_Petrol_Promo_01_5c3e4f7507.png&w=3840&q=75"
//         />
//       </Carousel.Slide>
//       <Carousel.Slide>
//         <Image
//           radius="md"
//           h={400}
//           src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
//         />
//       </Carousel.Slide>
//     </Carousel>
//   );
// }

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import React from "react";

export default function Banner(props) {
  const { images, ...rest } = props;
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      withIndicators
      height={300}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      withControls={false}
      loop={true}
      {...rest}
    >
      {images.map((item) => (
        <Carousel.Slide>
          <Image
            radius="md"
            src={item}
            height={300}
            style={{
              objectFit: "cover", // Ensures the image fills the space
              objectPosition: "center", // Centers the image
            }}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
