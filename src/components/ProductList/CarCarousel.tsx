import React from "react";
import { Carousel } from "@mantine/carousel";
import { Card, Image, Text, Badge, Group, Stack, Button } from "@mantine/core";
import { oldCars } from "../../helpers/data";

const CarCarousel = () => {
  return (
    <Stack align="center" style={{ width: "100%" }}>
      <Text size="xl" fw={500}>
        Still Can't Decide? You May Also Like These!
      </Text>
      <Carousel
        slideSize="33.333%"
        slideGap="md"
        loop
        align="start"
        withIndicators
        controlsOffset="xs"
        nextControlLabel="Next"
        previousControlLabel="Previous"
      >
        {oldCars.map((car, index) => (
          <Carousel.Slide key={index}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src={car.image}
                  height={160}
                  alt={car.name}
                  fit="contain"
                />
              </Card.Section>
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500} size="lg">
                  {car.price}
                </Text>
                <Badge color="orange" size="lg">
                  {car.installment}
                </Badge>
              </Group>
              <Text size="sm" color="dimmed">
                {car.name}
              </Text>
              <Stack gap={4} mt="sm">
                <Text size="xs">📏 {car.mileage}</Text>
                <Text size="xs">👥 {car.owners}</Text>
                <Text size="xs">🚗 {car.roadTax}</Text>
                <Text size="xs">📅 {car.date}</Text>
              </Stack>
              <Button fullWidth variant="light" color="orange" mt="md">
                View Details
              </Button>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Stack>
  );
};

export default CarCarousel;
