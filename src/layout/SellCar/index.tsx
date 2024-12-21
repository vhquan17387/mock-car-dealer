import React from "react";
import {
  Container,
  Text,
  Title,
  Grid,
  Group,
  Button,
  Input,
  Divider,
  Box,
  Image,
  Card,
} from "@mantine/core";
import { sellcar } from "../../assets";
import CarDetailsCard from "../../components/Product/CarDetailsCard";
import CarDetailsForm from "./CarDetailsForm";

function SellCar() {
  return (
    <Container style={{ marginTop: "20px" }}>
      {/* Header Section */}
      {/* <Grid align="center" gutter="lg">
        <Grid.Col span={8}>
          <Title order={2} style={{ color: "#333333", marginBottom: "10px" }}>
            Let us help you sell your car!
          </Title>
          <Text size="sm" color="dimmed" style={{ marginBottom: "20px" }}>
            We’ll get you the best quote, either from us or our trusted pool of
            500+ dealer partners.
          </Text>
          <Group gap="xl">
            <Box style={{ textAlign: "center" }}>
              <Text size="xl" style={{ color: "#FF5722" }}>
                ⚡
              </Text>
              <Text size="sm">Sell your car within 24 hours</Text>
            </Box>
            <Box style={{ textAlign: "center" }}>
              <Text size="xl" style={{ color: "#FF5722" }}>
                💰
              </Text>
              <Text size="sm">
                Earn up to $5,000 more as compared to selling elsewhere
              </Text>
            </Box>
            <Box style={{ textAlign: "center" }}>
              <Text size="xl" style={{ color: "#FF5722" }}>
                ✔️
              </Text>
              <Text size="sm">We’ll handle your paperwork for free</Text>
            </Box>
          </Group>
        </Grid.Col>
        <Grid.Col span={4}>
          <Image
            src="https://via.placeholder.com/300" // Replace with actual image
            alt="Car"
            radius="md"
            style={{ border: "1px solid #e0e0e0" }} // Light border for the image
          />
        </Grid.Col>
      </Grid> */}
      <Image src={sellcar} />
      <Divider my="xl" />

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Box
          style={{
            marginBottom: "20px",
          }}
        >
          <Text size="md" style={{ marginBottom: "10px" }}>
            When do you plan to sell?
          </Text>
          <Group gap="md">
            <Button
              variant="outline"
              color="gray"
              style={{
                flex: 1,
                color: "#333",
                borderColor: "#ddd",
              }}
            >
              Within 3 months
            </Button>
            <Button
              variant="outline"
              color="gray"
              style={{
                flex: 1,
                color: "#333",
                borderColor: "#ddd",
              }}
            >
              Within 6 months
            </Button>
            <Button
              variant="filled"
              color="orange"
              style={{
                flex: 1,
                backgroundColor: "#FF5722",
                borderColor: "#FF5722",
              }}
            >
              Just looking around
            </Button>
          </Group>
        </Box>

        <Input
          placeholder="Your car plate number"
          size="md"
          style={{
            marginBottom: "10px",
            backgroundColor: "#ffffff",
            borderColor: "#ddd",
          }}
        />
        <Input
          placeholder="Your name"
          size="md"
          style={{
            marginBottom: "10px",
            backgroundColor: "#ffffff",
            borderColor: "#ddd",
          }}
        />
        <Input
          placeholder="Your mobile number"
          size="md"
          style={{
            marginBottom: "10px",
            backgroundColor: "#ffffff",
            borderColor: "#ddd",
          }}
        />

        <Text size="xs" color="dimmed" style={{ margin: "20px 0" }}>
          By clicking “Submit”, I agree to be contacted by OneShift and its
          partners regarding the transaction of my vehicle, in accordance to
          OneShift’s{" "}
          <Text component="a" href="#" size="xs" color="orange" underline>
            Privacy Policy
          </Text>
          .
        </Text>
        <Button
          fullWidth
          color="orange"
          size="md"
          style={{
            backgroundColor: "#FF5722",
            borderColor: "#FF5722",
            color: "#ffffff",
          }}
        >
          Submit
        </Button>
      </Card>
      <CarDetailsForm />
    </Container>
  );
}

export default SellCar;
