import React, { useState } from "react";
import {
  Container,
  Grid,
  Input,
  Textarea,
  Text,
  Title,
  Group,
  Button,
  Divider,
  Box,
  List,
  Card,
} from "@mantine/core";
import { RichTex } from "../../components/RichText";

function CarDetailsForm() {
  // State to store form data
  const [formData, setFormData] = useState({
    id: "",
    imageUrl: "",
    price: "",
    installment: "",
    model: "",
    mileage: "",
    owners: "",
    yearlyCost: "",
    registrationDate: "",
    yearsLeft: "",
    certification: "",
    productAttributes: [],
    description: "",
  });

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add product attribute dynamically
  const addProductAttribute = () => {
    setFormData({
      ...formData,
      productAttributes: [
        ...formData.productAttributes,
        { key: "", value: "" },
      ],
    });
  };

  // Update individual product attribute
  const handleAttributeChange = (index, field, value) => {
    const updatedAttributes = [...formData.productAttributes];
    updatedAttributes[index][field] = value;
    setFormData({ ...formData, productAttributes: updatedAttributes });
  };

  return (
    <Card size="lg" style={{ padding: "20px" }}>
      <Title order={2} mb="md">
        Car Details Input Form
      </Title>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Input
            name="id"
            placeholder="Car ID"
            label="Car ID"
            value={formData.id}
            onChange={handleInputChange}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Input
            name="price"
            placeholder="Price"
            label="Price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Input
            name="installment"
            placeholder="Installment"
            label="Installment"
            value={formData.installment}
            onChange={handleInputChange}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Input
            name="model"
            placeholder="Model"
            label="Model"
            value={formData.model}
            onChange={handleInputChange}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Input
            name="mileage"
            placeholder="Mileage"
            label="Mileage"
            value={formData.mileage}
            onChange={handleInputChange}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Input
            name="owners"
            placeholder="Owners"
            label="Owners"
            value={formData.owners}
            onChange={handleInputChange}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Input
            name="yearlyCost"
            placeholder="Yearly Cost"
            label="Yearly Cost"
            value={formData.yearlyCost}
            onChange={handleInputChange}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Input
            name="registrationDate"
            placeholder="Registration Date"
            label="Registration Date"
            value={formData.registrationDate}
            onChange={handleInputChange}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Input
            name="yearsLeft"
            placeholder="Years Left"
            label="Years Left"
            value={formData.yearsLeft}
            onChange={handleInputChange}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Input
            name="certification"
            placeholder="Certification"
            label="Certification"
            value={formData.certification}
            onChange={handleInputChange}
          />
        </Grid.Col>
        <Grid.Col span={12}>
          <RichTex value="" onChange={() => {}} />
        </Grid.Col>
      </Grid>

      <Divider my="lg" />

      <Title order={3} mb="md">
        Product Attributes
      </Title>
      {formData.productAttributes.map((attribute, index) => (
        <Grid key={index} gutter={"xs"}>
          <Grid.Col span={6} mb={"xs"}>
            <Input
              placeholder="Attribute Key"
              value={attribute.key}
              onChange={(e) =>
                handleAttributeChange(index, "key", e.target.value)
              }
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Input
              placeholder="Attribute Value"
              value={attribute.value}
              onChange={(e) =>
                handleAttributeChange(index, "value", e.target.value)
              }
            />
          </Grid.Col>
        </Grid>
      ))}
      <Button variant="outline" mt="md" onClick={addProductAttribute}>
        Add Attribute
      </Button>
    </Card>
  );
}

export default CarDetailsForm;
