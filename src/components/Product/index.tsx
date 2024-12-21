import React from "react";

import { Card, Grid, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
import { oldCars } from "../../helpers/data";
import ProductDisplay from "../ProductDisplay";
import CarDetailsCard from "./CarDetailsCard";
import VehicleOverview from "./VehicleOverview";
import CarCarousel from "../ProductList/CarCarousel";
export default function Product() {
  // const { isLbShowing = false } = useMyContext(LightboxContext);
  const isLbShowing = false;
  const { id } = useParams();
  const { width } = useWindowSize();
  const product = oldCars.find((item) => (item.id = id));

  return (
    <Grid>
      <Grid.Col span={{ lg: 8, md: 12 }}>
        <ProductDisplay />
      </Grid.Col>
      <Grid.Col span={{ lg: 4, md: 12 }}>
        <CarDetailsCard product={product} />
      </Grid.Col>
      <Grid.Col span={12}>
        <VehicleOverview product={product} />
      </Grid.Col>
      <Grid.Col span={12}>
        <Card shadow="md" padding="lg" radius="md" withBorder>
          <Title order={2} align="center" mb="lg">
            Description
          </Title>
          <div
            dangerouslySetInnerHTML={{ __html: product?.description || "" }}
          />
        </Card>
      </Grid.Col>
      <Grid.Col span={12}>
        <CarCarousel />
      </Grid.Col>
      {/* <ProductDisplay /> */}
    </Grid>
  );
}
