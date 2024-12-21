import React, { useCallback, useEffect, useState } from "react";
import {
  Popover,
  Button,
  Group,
  Text,
  Badge,
  SimpleGrid,
  Divider,
  NumberInput,
  Slider,
  RangeSlider,
} from "@mantine/core";
import { useClickOutside } from "@mantine/hooks";

const FilterPopover = (props) => {
  const { item, isSelected, onApply, type, ...rest } = props;
  const [selected, setSelected] = useState<any[]>([]);
  const [opened, setOpened] = useState<boolean>(false);
  const clickOutsideRef = useClickOutside(() => {
    setOpened(false);
  });

  const handleSubmit = () => {
    onApply({ value: selected });
    setOpened(false);
  };

  const handleClear = () => {
    onApply({ value: [] });
    setOpened(false);
  };

  const handleSelect = (value) => {
    setSelected((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item != value);
      } else {
        return [...prev, value];
      }
    });
  };

  const setRange = (values) => {
    setSelected(values);
  };

  const isItemSelected = useCallback(
    (value) => {
      return selected.includes(value);
    },
    [selected]
  );

  // useEffect(() => {
  //   setSelected(item.value);
  // }, [item]);

  return (
    <>
      <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        closeOnClickOutside={true}
        position="bottom"
        width={300}
        shadow="md"
      >
        <Popover.Target>
          <Button
            size="sm"
            onClick={() => setOpened((o) => !o)}
            variant={isSelected ? "filled" : "outline"}
            color={isSelected ? "orange" : "black"}
          >
            {item.key}
          </Button>
        </Popover.Target>
        <Popover.Dropdown
          style={{ borderRadius: "10px" }}
          ref={clickOutsideRef}
        >
          <Text fw={600} size="sm" mb="xs">
            {item.key}
          </Text>
          {type === "range" ? (
            [
              ...RangeFilter({
                ...rest,
                range: selected.length > 0 ? selected : [rest.min, rest.max],
                setRange,
              }),
            ]
          ) : (
            <SimpleGrid cols={2} spacing="xs" mb="md">
              {item.value.map((promotion, index) => (
                <Badge
                  key={index}
                  variant={isItemSelected(promotion) ? "filled" : "light"}
                  size="sm"
                  color={isItemSelected(promotion) ? "orange" : "gray"}
                  style={{
                    borderRadius: "20px",
                    textAlign: "center",
                  }}
                  onClick={() => handleSelect(promotion)}
                >
                  {promotion}
                </Badge>
              ))}
            </SimpleGrid>
          )}

          <Divider my="xs" />
          <Group justify="apart">
            <Text
              size="sm"
              color="dimmed"
              style={{ cursor: "pointer" }}
              onClick={handleClear}
            >
              Clear
            </Text>
            <Button color="orange" size="sm" onClick={handleSubmit}>
              Apply
            </Button>
          </Group>
        </Popover.Dropdown>
      </Popover>
    </>
  );
};

const RangeFilter = (props) => {
  const { range, setRange, min, max, step } = props;
  return [
    <RangeSlider
      value={range}
      onChange={setRange}
      min={min}
      max={max}
      step={step}
      size="sm"
      color="orange"
      mb="md"
      marks={[
        { value: min, label: `${min}` },
        { value: max, label: `${max}` },
      ]}
      styles={{
        thumb: { borderColor: "orange", backgroundColor: "#fff" },
        track: { backgroundColor: "#f5f5f5" },
      }}
    />,
    <Group gap="xs" mb="md">
      <NumberInput
        value={range[0]}
        onChange={(value) => setRange([value || min, range[1]])}
        min={min}
        max={max}
        step={step}
        size="sm"
        style={{ width: 100 }}
      />
      <Text>-</Text>
      <NumberInput
        value={range[1]}
        onChange={(value) => setRange([range[0], value || max])}
        min={min}
        max={max}
        step={step}
        size="sm"
        style={{ width: 100 }}
      />
    </Group>,
  ];
};

export default FilterPopover;
