import { Grid, Text } from "@mantine/core";
import React from "react";

const ProductAttribute = ({ attributes }) => {
  return (
    <Grid justify="space-between" gutter={"xs"}>
      {attributes.map((attr, index) => (
        <Grid.Col
          span={{ lg: 3, sm: 5 }}
          style={{ marginLeft: 6, marginRight: 6 }}
          key={index}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Text fw={700} style={{ color: "red", marginRight: "10px" }}>
              •
            </Text>
            <Text fw={500} style={{ marginRight: "auto" }}>
              {attr.key}
            </Text>
            <Text fw={700}>{attr.value}</Text>
          </div>
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default ProductAttribute;
