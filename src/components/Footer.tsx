import React from "react";
import {
  Container,
  Grid,
  Text,
  Title,
  Anchor,
  Input,
  Button,
  Group,
  Image,
  Divider,
} from "@mantine/core";
import { getAssetPath } from "../helpers/utils";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        color: "#fff",
        padding: "40px 20px",
        justifyItems: "center",
      }}
    >
      <div style={{ justifyItems: "center" }} className="container">
        <Grid style={{ width: "100%" }}>
          {/* Services Section */}
          <Grid.Col span={{ xs: 6, md: 4 }}>
            <Title order={5} style={{ color: "#fff", marginBottom: "10px" }}>
              SERVICES
            </Title>
            <Divider
              size="xs"
              color="orange"
              style={{ marginBottom: "10px" }}
            />
            <Text>
              <Anchor href="#" color="gray">
                Buy Used
              </Anchor>
            </Text>
            <Text>
              <Anchor href="#" color="gray">
                Buy New
              </Anchor>
            </Text>
            <Text>
              <Anchor href="#" color="gray">
                Sell Car
              </Anchor>
            </Text>
          </Grid.Col>

          {/* About Section */}
          <Grid.Col span={{ xs: 6, md: 4 }}>
            <Title order={5} style={{ color: "#fff", marginBottom: "10px" }}>
              ABOUT
            </Title>
            <Divider
              size="xs"
              color="orange"
              style={{ marginBottom: "10px" }}
            />
            <Text>
              <Anchor href="#" color="gray">
                About Us
              </Anchor>
            </Text>
            <Text>
              <Anchor href="#" color="gray">
                Contact Us
              </Anchor>
            </Text>
            <Text>
              <Anchor href="#" color="gray">
                Locate Us
              </Anchor>
            </Text>
            <Text>
              <Anchor href="#" color="gray">
                Careers
              </Anchor>
            </Text>
            <Text>
              <Anchor href="#" color="gray">
                How It Works
              </Anchor>
            </Text>
            <Text>
              <Anchor href="#" color="gray">
                Terms & Conditions
              </Anchor>
            </Text>
            <Text>
              <Anchor href="#" color="gray">
                Blog
              </Anchor>
            </Text>
          </Grid.Col>

          {/* Subscribe Section */}
          <Grid.Col span={{ xs: 12, md: 4 }}>
            <Title order={5} style={{ color: "#fff", marginBottom: "10px" }}>
              SUBSCRIBE
            </Title>
            <Divider
              size="xs"
              color="orange"
              style={{ marginBottom: "10px" }}
            />
            <Text>Get monthly updates and free resources</Text>
            <Group gap="xs" style={{ marginTop: "10px" }}>
              <Input placeholder="Email Address" style={{ flex: 1 }} />
              <Button color="orange">Go</Button>
            </Group>
            <Title order={5} style={{ color: "#fff", marginTop: "20px" }}>
              DOWNLOAD THE APP
            </Title>
            <Group gap="xs" style={{ marginTop: "10px" }}>
              <Image
                src={`${getAssetPath("static/apple-store.svg")}`}
                alt="App Store"
                height={50}
              />
              <Image
                src={`${getAssetPath("static/google-store.svg")}`}
                alt="Google Play"
                height={50}
              />
            </Group>
          </Grid.Col>
        </Grid>

        {/* Find Us In Section */}
        <Divider color="gray" style={{ margin: "20px 0" }} />

        {/* Footer Description */}
        <Text size="sm" style={{ marginTop: "20px", color: "gray" }}>
          Carro is Singapore’s No 1 car marketplace that offers a full-stack
          service for all aspects of car ownership. By offering a trustworthy
          and transparent experience, Carro challenges the traditional
          automotive industry through technology.
        </Text>
        <Text size="sm" style={{ marginTop: "10px", color: "gray" }}>
          At Carro, you can buy new and used cars, sell cars online and easily
          rent or lease a car. On top of that, we offer low-interest car loans
          for you to finance your next car and even provide car repair and
          maintenance services at our workshop.
        </Text>

        {/* Footer Bottom */}
        <Divider color="gray" style={{ margin: "20px 0" }} />
        <Text ta="center" size="xs" color="gray">
          Copyright © 2024 All Rights Reserved
        </Text>
        <Text ta="center" size="xs" color="gray" style={{ marginTop: "5px" }}>
          <Anchor href="#" color="gray">
            Terms of use
          </Anchor>{" "}
          |{" "}
          <Anchor href="#" color="gray">
            Privacy Policy
          </Anchor>
        </Text>
      </div>
    </div>
  );
};

export default Footer;
