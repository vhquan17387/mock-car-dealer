import React, { useCallback, useState } from "react";
import {
  Drawer,
  Button,
  Group,
  Badge,
  Text,
  Tabs,
  Chip,
  Divider,
  SimpleGrid,
  Flex,
  Grid,
} from "@mantine/core";

const FilterDrawer = ({ filterOptions, filter: currentFilter, onApply }) => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState<any>(currentFilter);
  //   const [filter, setFilter] = useState<any>(currentFilter);
  const handleSubmit = () => {
    onApply({ value: selected });
    setOpened(false);
  };

  const handleClear = () => {
    onApply({ value: {} });
    setSelected({});
    setOpened(false);
  };

  const handleSelect = (key, value) => {
    setSelected((prev) => {
      const newSelected = { ...prev };
      if (newSelected[key]?.includes(value)) {
        newSelected[key] = newSelected[key].filter((item) => item !== value);

        if (newSelected[key].length === 0) {
          delete newSelected[key];
        }
      } else {
        newSelected[key] = newSelected[key]
          ? [...newSelected[key], value]
          : [value];
      }

      return newSelected;
    });
  };

  const isItemSelected = useCallback(
    (key, value) => {
      return selected[key]?.includes(value);
    },
    [selected]
  );

  const removeFilter = (removeItem: any) => {
    setSelected((prev) => {
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

  return (
    <>
      <Button
        hiddenFrom="sm"
        color={Object.keys(selected).length > 0 ? "orange" : "default"}
        variant={Object.keys(selected).length > 0 ? "outline" : "default"}
        onClick={() => {
          setOpened(true);
        }}
      >
        {`(${Object.keys(selected).length}) Filter`}
      </Button>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Filter"
        padding="md"
        size="lg"
        position="bottom"
      >
        {/* Top Section */}
        <Group justify="space-between" mb="md">
          <Text
            size="sm"
            color="red"
            fw={700}
            style={{ cursor: "pointer" }}
            onClick={handleClear}
          >
            Clear All
          </Text>
        </Group>

        {/* Active Filters */}
        <Group gap="xs" visibleFrom="sm">
          <Text
            variant="link"
            size="sm"
            color="red"
            fw={700}
            style={{ cursor: "pointer" }}
            onClick={() => setSelected({})}
          >
            Clear All
          </Text>
          {Object.entries(selected)
            .filter(([key, value]) => value.length > 0)
            .map(([key, value]) => {
              // Normalize the value to always be an array for iteration
              // const data = Array.isArray(value) ? value : [value];
              const isRange =
                filterOptions.find((item) => item.key === key)?.type ===
                "range";
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

        {/* Tabs for Filters */}
        <Tabs defaultValue="Color" orientation="vertical">
          <Tabs.List>
            {filterOptions.map((item) => {
              return <Tabs.Tab value={item.key}>{item.key}</Tabs.Tab>;
            })}
          </Tabs.List>

          {filterOptions.map((item) => {
            return (
              <Tabs.Panel
                value={item.key}
                pt="md"
                style={{ overflowY: "auto" }}
              >
                <Grid gutter="xs" mb="md">
                  {item.value.map((promotion, index) => (
                    <Grid.Col span={{ xs: 6 }} ta={"center"}>
                      <Badge
                        key={index}
                        variant={
                          isItemSelected(item.key, promotion)
                            ? "filled"
                            : "light"
                        }
                        size="md"
                        color={
                          isItemSelected(item.key, promotion)
                            ? "orange"
                            : "gray"
                        }
                        style={{
                          borderRadius: "20px",
                          textAlign: "center",
                          minWidth: 100,
                        }}
                        onClick={() => handleSelect(item.key, promotion)}
                      >
                        {promotion}
                      </Badge>
                    </Grid.Col>
                  ))}
                </Grid>
              </Tabs.Panel>
            );
          })}
        </Tabs>

        <Divider my="md" />

        {/* Footer */}
        <div
          style={{
            position: "sticky",
            bottom: 0,
            zIndex: 10,
            backgroundColor: "white",
            padding: "16px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <Button color="orange" fullWidth size="lg" onClick={handleSubmit}>
            Apply
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
