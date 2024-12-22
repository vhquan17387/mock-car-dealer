import React, { useState } from "react";
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
  Radio,
  Stack,
} from "@mantine/core";
import { sellcar } from "../../assets";
import CarDetailsForm from "./CarDetailsForm";
const data = [
  {
    name: "Within 1 months",
  },
  {
    name: "Within 3 months",
  },
  {
    name: "Within 6 months",
  },
];

function SellCar() {
  const [value, setValue] = useState<string | null>(null);
  const [filter, setFilter] = useState({});
  return (
    <Container
      style={{
        marginTop: "20px",
        justifyItems: "center",
      }}
    >
      <Image src={sellcar} />
      <Divider my="xl" />

      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        style={{
          marginBottom: "20px",
          width: "100%",
        }}
      >
        <Box
          style={{
            marginBottom: "20px",
            width: "100%",
          }}
        >
          <Text size="md" style={{ marginBottom: "10px" }} ta="center">
            When do you plan to sell?
          </Text>
          <Group gap="md" justify="center">
            <Radio.Group value={value} onChange={setValue}>
              <Grid pt="md" gutter="xs" grow>
                {data.map((item) => (
                  <Grid.Col span={3}>
                    <Radio.Card radius="md" value={item.name} key={item.name}>
                      <Group wrap="nowrap" align="flex-start">
                        <Button
                          variant={value === item.name ? "filled" : "outline"}
                          color={value === item.name ? "orange" : "gray"}
                          style={{
                            flex: 1,
                          }}
                        >
                          {item.name}
                        </Button>
                      </Group>
                    </Radio.Card>
                  </Grid.Col>
                ))}
              </Grid>
            </Radio.Group>
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
      </Card>
      <CarDetailsForm />
      <div style={{ width: "90%" }}>
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
      </div>
    </Container>
  );
}

export default SellCar;
