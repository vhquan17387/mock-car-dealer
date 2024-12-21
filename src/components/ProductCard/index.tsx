import React from "react";
import { Card, Image, Text, Group, Badge, Button, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  let navigate = useNavigate();
  const handleViewDetails = () => {
    navigate("/product/" + product.id);
  };
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={product.imageUrl}
          alt={product.model}
          height={200}
          fit="cover"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={700} size="xl" color="orange">
          {product.price}
        </Text>
        <Text size="sm" color="dimmed">
          Instalment: <b>{product.installment}</b>
        </Text>
      </Group>

      <Text fw={600} size="lg">
        {product.model}
      </Text>

      <Stack gap="sm" mt="md">
        <Group gap={8}>
          <Badge color="gray" radius="sm" size="sm">
            {product.mileage}
          </Badge>
          <Badge color="gray" radius="sm" size="sm">
            {product.owners}
          </Badge>
          <Badge color="gray" radius="sm" size="sm">
            {product.yearlyCost}
          </Badge>
        </Group>
        <Group gap={8}>
          <Text size="sm" color="dimmed">
            {product.registrationDate} ({product.yearsLeft})
          </Text>
          <Badge color="orange" radius="sm" size="sm">
            {product.certification}
          </Badge>
        </Group>
      </Stack>

      <Button
        variant="light"
        color="orange"
        fullWidth
        mt="md"
        radius="md"
        onClick={handleViewDetails}
      >
        View Details
      </Button>
    </Card>
  );
};

export default ProductCard;
