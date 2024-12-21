import React, { useCallback, useState } from "react";
import Banner from "../../components/Banner";
import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import ProductList from "../../components/ProductList";
import { oldCars } from "../../helpers/data";
import { old_new } from "../../assets";
import MainFilter from "../../components/MainFilter";
import { filterCars } from "../../helpers/utils";

const images = [
  old_new,
  "https://hips.hearstapps.com/hmg-prod/images/2023-vinfast-vf8-9305-64638baaa41e3.jpg?crop=0.912xw:0.683xh;0.0481xw,0.269xh&resize=1200:*",
];

function Home() {
  const [filter, setFilter] = useState({});
  const handleOnChange = (value) => {
    setFilter(value);
  };
  const data = useCallback(() => filterCars(oldCars, filter), [filter]);
  return (
    <>
      <Banner images={images} />
      <div style={{ backgroundColor: "#fff", marginTop: 4 }}>
        <Input placeholder="Search" leftSection={<IconSearch stroke={2} />} />
      </div>
      <MainFilter onchange={handleOnChange} />
      <ProductList products={data()} />
    </>
  );
}

export default Home;
