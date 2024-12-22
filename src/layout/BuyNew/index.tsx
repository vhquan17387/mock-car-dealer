import React from "react";
import {
  Container,
  Card,
  Grid,
  Group,
  Text,
  Image,
  Badge,
  Title,
  Divider,
  TextInput,
  Button,
} from "@mantine/core";
import { InterestedForm } from "../../components/InterestForm";
import { newCar } from "../../helpers/data";
import CarInfo from "./CarInfo";
const CarsPage = () => {
  return (
    <Container size="lg" mt="md">
      <Title ta="left" order={4} style={{ marginBottom: "20px" }}>
        Browse our selection of cars.
      </Title>

      {/* Filter Button */}
      <Group mb="md">
        <Button color="orange" variant="light">
          Electric
        </Button>
      </Group>
      {/* Cars Section */}
      <Grid gutter="md">
        {newCar.map((car) => (
          <Grid.Col span={{ md: 6 }} key={car.id}>
            <Card shadow="sm" radius="md" withBorder>
              <Group justify="apart" style={{ marginBottom: "10px" }}>
                <Badge color="teal">{car.type}</Badge>
                <Text fw={500}>{car.name}</Text>
              </Group>
              <Text fw={700} size="xl" color="orange" mb="xs">
                {car.price}
              </Text>
              <Group gap="xs" mb="md">
                {Object.entries(car.details).map(([key, value]) => (
                  <Text size="sm" color="dimmed" key={key}>
                    <strong>{key}:</strong> {value}
                  </Text>
                ))}
              </Group>
              <Image
                src={car.image}
                alt={car.name}
                radius="md"
                height={300}
                style={{ flexBasis: "auto" }}
              />
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {/* Interested Form */}
      <Divider my="xl" />
      <InterestedForm title={"Interest?"} />
    </Container>
  );
};

export default CarsPage;
