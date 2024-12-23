import {
  Autocomplete,
  Button,
  Card,
  Divider,
  Grid,
  Input,
  TagsInput,
  Title,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React, { useEffect, useState } from "react";
import { RichTex } from "../../components/RichText";
import { UploadImage } from "../../components/UploadImage";
const models = [
  { name: "LUX A2.0", type: "Executive Sedan" },
  { name: "LUX SA2.0", type: "Luxury Crossover SUV" },
  { name: "President", type: "Premium SUV with V8 Engine" },
  { name: "Fadil", type: "Compact City Car" },
  { name: "VF e34", type: "Subcompact SUV" },
  { name: "VF 3", type: "Mini SUV" },
  { name: "VF 5", type: "A-segment City SUV" },
  { name: "VF 6", type: "Subcompact SUV" },
  { name: "VF 7", type: "Compact SUV" },
  { name: "VF 8", type: "Mid-size SUV" },
  { name: "VF 9", type: "Full-size SUV" },
  { name: "VF Wild", type: "Electric Pickup Truck (Concept)" },
];
function CarDetailsForm({ defaultData, setData }) {
  const [formData, setFormData] = useState(defaultData);
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

  useEffect(() => {
    setData(formData);
  }, [formData]);

  return (
    <div>
      <Title order={2} mb="md" mt={"md"}>
        Car Details
      </Title>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Input
            name="carId"
            placeholder="Your car plate number"
            value={formData.id}
            onChange={handleInputChange}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Input
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Autocomplete
            placeholder="What is your car model"
            data={models.map((item) => item.name)}
            comboboxProps={{ shadow: "md" }}
            name="model"
            value={formData.model}
            onChange={handleInputChange}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Input
            name="mileage"
            placeholder="Mileage"
            value={formData.mileage}
            onChange={handleInputChange}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <DateInput
            name="registrationDate"
            placeholder="Registration Date"
            value={formData.owners}
            onChange={handleInputChange}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <TagsInput placeholder="Enter tag" />
        </Grid.Col>
        <Grid.Col span={12}>
          <RichTex value="" onChange={() => {}} />
        </Grid.Col>
        <Grid.Col span={12}>
          <UploadImage />
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
    </div>
  );
}

export default CarDetailsForm;
