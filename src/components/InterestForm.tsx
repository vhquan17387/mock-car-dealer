import { Title, TextInput, Button, Text } from "@mantine/core";
import React from "react";

export const InterestedForm = ({ title }) => {
  return (
    <div
      style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}
    >
      <Title ta="center" order={3} style={{ marginBottom: "10px" }}>
        {title}
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
