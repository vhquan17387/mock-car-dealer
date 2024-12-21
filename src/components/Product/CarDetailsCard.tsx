import React from "react";
import {
  Card,
  Text,
  Button,
  Group,
  Badge,
  Divider,
  Tooltip,
  Title,
} from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";

const CarDetailsCard = ({ product }) => {
  return (
    <Card shadow="md" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mb="xs">
        <Text size="xl" fw={700} color="orange">
          ${product.price} (incl. GST)
        </Text>
        <Badge color="red" size="lg" radius="sm">
          {product.certification}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        Drive from just{" "}
        <Tooltip
          label="Monthly payment based on selected loan terms"
          position="top"
        >
          <Text component="span" size="sm" color="black" fw={600}>
            ${product.monthlyPayment}/mth
          </Text>
        </Tooltip>
      </Text>

      <Divider my="sm" />

      <Title order={3}>{product.model}</Title>
      <Text size="sm" color="dimmed" mb="xs">
        {product.kilometers} km • {product.ownerCount} Owner
      </Text>
      <Text size="sm" color="dimmed" mb="lg">
        {product.registrationDate} ({product.age})
      </Text>

      <Group justify="space-between" gap="sm" mb="lg">
        <Button variant="outline" size="md" color="orange">
          Schedule Viewing
        </Button>
        <Button variant="filled" size="md" color="orange">
          Buy Now
        </Button>
      </Group>

      <Group justify="space-between" align="center">
        <Text size="sm" color="dimmed">
          Reserve: ${product.reservePrice}
        </Text>
        <Button
          variant="subtle"
          leftSection={<IconBrandWhatsapp size={16} />}
          color="green"
          size="xs"
        >
          Chat
        </Button>
      </Group>

      <Divider my="sm" />

      <Text size="xs" color="dimmed">
        ID: {product.id}
      </Text>
    </Card>
  );
};

export default CarDetailsCard;
