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

const cars = [
  {
    id: 1,
    type: "Petrol",
    name: "Honda Vezel 1.5A G",
    price: "$65,000",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    details: {
      "Engine Capacity": "1499 cc",
      "Fuel / Efficiency": "17 km/L",
      "Max Power": "87.0 kW (116 bhp)",
    },
  },
  {
    id: 2,
    type: "Petrol",
    name: "Toyota Noah Hybrid 1.8A X",
    price: "$105,000",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    details: {
      "Engine Capacity": "1797 cc",
      "Fuel / Efficiency": "23.4 km/L",
      "Max Power": "103 kW (138 bhp)",
    },
  },
];

const InterestedForm = () => {
  return (
    <div
      style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}
    >
      <Title ta="center" order={3} style={{ marginBottom: "10px" }}>
        Interested?
      </Title>
      <Text ta="center" size="sm" color="dimmed" mb="md">
        Fill out the form below, and we'll reach out with more details.
      </Text>
      <form>
        <TextInput label="Name" placeholder="E.g. John Doe" required mb="md" />
        <TextInput
          label="Email"
          placeholder="E.g. john.doe@gmail.com"
          required
          mb="md"
        />
        <TextInput
          label="Mobile Number"
          placeholder="E.g. 9123 4567"
          required
          mb="lg"
        />
        <Button type="submit" color="orange" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

const CarsPage = () => {
  return (
    <Container size="lg" mt="md">
      <Title ta="left" order={4} style={{ marginBottom: "20px" }}>
        Browse our selection of cars.
      </Title>

      {/* Filter Button */}
      <Group mb="md">
        <Button color="orange" variant="light">
          Petrol
        </Button>
      </Group>

      {/* Cars Section */}
      <Grid gutter="md">
        {cars.map((car) => (
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
              <Image src={car.image} alt={car.name} radius="md" />
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      {/* Interested Form */}
      <Divider my="xl" />
      <InterestedForm />
    </Container>
  );
};

export default CarsPage;
