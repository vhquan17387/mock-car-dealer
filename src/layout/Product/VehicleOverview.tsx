import React from "react";
import {
  Card,
  Text,
  Title,
  Divider,
  Tabs,
  SimpleGrid,
  Stack,
  Flex,
  Grid,
} from "@mantine/core";
import {
  IconUsers,
  IconCalendar,
  IconClock,
  IconGauge,
  IconCar,
} from "@tabler/icons-react";
import ProductAttribute from "./ProductAttribute";

const VehicleOverview = ({ product }) => {
  const cardContents = [
    {
      text: " Owners",
      icon: <IconUsers size={12} />,
      value: product.previousOwners || 1,
    },
    {
      text: " Reg. Date",
      icon: <IconCalendar size={12} />,
      value: product.registrationDate,
    },
    {
      text: " Color",
      icon: <IconClock size={12} />,
      value: product.color,
    },
    {
      text: " Depreciation",
      icon: <IconCar size={12} />,
      value: `${product.depreciation || "$2,000"}/yr`,
    },
    {
      text: " Mileage",
      icon: <IconGauge size={12} />,
      value: `${product.mileage}`,
    },
  ];
  return (
    <Card shadow="md" padding="lg" radius="md" withBorder>
      <Title order={2} ta="center" mb="lg">
        Vehicle Overview
      </Title>

      <SimpleGrid cols={{ md: 1, lg: 5 }} spacing="md" mb="lg">
        {cardContents.map((item) => {
          return (
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Stack align="center" gap="xs">
                <Text size="sm" fw={500}>
                  {item.icon} {item.text}
                </Text>
                <Text size="lg" fw={700}>
                  {item.value}
                </Text>
              </Stack>
            </Card>
          );
        })}
      </SimpleGrid>
      <ProductAttribute attributes={product.productAttributes} />
    </Card>
  );
};

export default VehicleOverview;
