import React, { useState, useEffect } from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  Button,
  Flex,
  Stack,
} from "@mantine/core";
import { newCar } from "../../helpers/data";

const CarInfo = () => {
  return (
    <Stack gap={12}>
      {newCar.map((car) => (
        <Flex
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "sm", sm: "lg" }}
          justify={{ sm: "center" }}
        >
          <Image src={car.image} alt={car.name} />
          <Card key={car.id} shadow="sm" padding="lg" radius="md" withBorder>
            <Group justify="apart" mt="md" mb="xs">
              <Text fw={500} size="lg">
                {car.name}
              </Text>
              <Badge color="red" variant="light">
                Starting Price: {car.price}
              </Badge>
            </Group>
            <Text size="sm" color="dimmed">
              {Object.entries(car.details).map(([index, detail]) => (
                <div key={index}>- {detail}</div>
              ))}
            </Text>
            <Button variant="light" color="blue" fullWidth mt="md" radius="md">
              Learn More
            </Button>
          </Card>
        </Flex>
      ))}
    </Stack>
  );
};

export default CarInfo;
