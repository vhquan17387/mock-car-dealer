import React from "react";
import { Carousel } from "@mantine/carousel";
import { Card, Image, Text, Badge, Group, Stack, Button } from "@mantine/core";
import { oldCars } from "../../helpers/data";

const CarCarousel = () => {
  return (
    <Stack align="center" style={{ width: "100%", maxWidth: "1200px" }}>
      <Text size="xl" fw={500}>
        Still Can't Decide? You May Also Like These!
      </Text>
      <Carousel
        slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
        slideGap="md"
        loop
        align="start"
        withIndicators
        controlsOffset="xs"
        style={{ width: "100%", maxWidth: "1200px" }}
      >
        {oldCars.slice(0, 4).map((car, index) => (
          <Carousel.Slide key={index}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src={car.imageUrl}
                  height={160}
                  alt={car.model}
                  fit="contain"
                />
              </Card.Section>
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500} size="lg">
                  {car.price}
                </Text>
              </Group>
              <Text size="sm" color="dimmed">
                {car.model}
              </Text>
              <Stack gap={4} mt="sm">
                <Text size="xs">📏 {car.mileage}</Text>
                <Text size="xs">👥 {car.owners}</Text>
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
