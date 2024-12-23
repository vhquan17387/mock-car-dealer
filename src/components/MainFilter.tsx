import React, { useCallback, useEffect, useState } from "react";
import { Button, Badge, Group, Text } from "@mantine/core";
import FilterPopover from "./FilterPopover";
import FilterDrawer from "./FilterDrawer";

// Filter options
const filterOptions = [
  { key: "Color", value: ["Black", "White", "Yellow", "Red", "Blue", "Grey"] },
  {
    key: "Model",
    value: [
      "VF3",
      "Fadil",
      "VF5 Plus",
      "VF6",
      "VF7",
      "VF8",
      "VF9",
      "Lux A2.0", // Petrol sedan
      "Lux SA2.0", // Petrol SUV
      "President", // Premium petrol SUV
      "Impes", // Compact petrol car
      "Klara", // Petrol scooter/bike
    ],
  },
  { key: "Seat", value: ["2", "5", "7"] },
  {
    key: "Type",
    value: ["Sedan", "Hatchback", "SUV", "Crossover", "Electric"],
  },
  { key: "Fuel Type", value: ["Petrol", "Electric"] },
  { key: "Transmission", value: ["Automatic", "Manual"] },
  {
    key: "Year",
    value: [2000, 2024],
    type: "range",
    min: 2000,
    max: 2024,
    step: 1,
  },
  {
    key: "Price Range",
    value: [
      "Below $20,000",
      "$20,000 - $40,000",
      "$40,000 - $60,000",
      "Above $60,000",
    ],
  },
];
// Type for a single filter
type FilterItem = {
  key: string;
  value: string | string[];
};

const MainFilter = ({ onchange }) => {
  const [filter, setFilter] = useState<any>({});

  // Remove a specific filter
  const removeFilter = (removeItem: FilterItem) => {
    setFilter((prev) => {
      if (
        filterOptions.find((item) => item.key === removeItem.key)?.type ===
        "range"
      ) {
        prev[removeItem.key] = [];
      } else {
        prev[removeItem.key] = prev[removeItem.key]?.filter(
          (item) => item !== removeItem.value
        );
      }

      return { ...prev };
    });
  };

  // Add a filter
  const addFilter = (key: string, value: string | string[]) => {
    setFilter((prev) => {
      prev[key] = value;
      return { ...prev };
    });
  };

  // Check if a filter is selected
  const isSelected = useCallback(
    (key: string) => {
      return filter[key]?.length > 0;
    },
    [filter]
  );

  useEffect(() => {
    onchange(filter);
  }, [filter]);

  return (
    <div
      style={{
        marginTop: "10px",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {/* Filter Buttons */}
      <Group gap="xs" visibleFrom="sm">
        {filterOptions.map((item) => (
          <FilterPopover
            key={item.key}
            type={item.type}
            item={item}
            size="sm"
            onApply={({ value }: { value: string | string[] }) =>
              addFilter(item.key, value)
            }
            text={item}
            isSelected={isSelected(item.key)}
          />
        ))}
      </Group>

      {/* Selected Filters */}
      <Group gap="xs" visibleFrom="sm">
        <Text
          variant="link"
          size="sm"
          color="red"
          fw={700}
          style={{ cursor: "pointer" }}
          onClick={() => setFilter({})}
        >
          Clear All
        </Text>
        {Object.entries(filter)
          .filter(([key, value]) => value.length > 0)
          .map(([key, value]) => {
            // Normalize the value to always be an array for iteration
            // const data = Array.isArray(value) ? value : [value];
            const isRange =
              filterOptions.find((item) => item.key === key)?.type === "range";
            const data = isRange ? [`${key}:${value[0]}-${value[1]}`] : value;
            return data.map((item, index) => (
              <Badge
                key={`${key}-${index}`} // Use key and index for unique keys
                size="lg"
                color="blue"
                radius="sm"
                variant="light"
                rightSection={
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      removeFilter({
                        key,
                        value: item, // Pass the item value for removal
                      })
                    }
                  >
                    ✖
                  </span>
                }
              >
                {item} {/* Display the item */}
              </Badge>
            ));
          })}
      </Group>

      <FilterDrawer
        filterOptions={filterOptions}
        filter={filter}
        onApply={({ value }) => {
          setFilter(value);
        }}
      />
    </div>
  );
};

export default MainFilter;
