import { useState } from "react";
import AirlineList from "@/components/AirlineList";
import MyBags from "@/components/MyBags";
import Sort from "@/components/Sort"; // Correct import for the Sort component.
import UnitSystem from "@/components/UnitSystem";
import { convertDimension } from "@/utils";
import { styled } from "styled-components";

export default function HomePage({
  airlines,
  unitSystem,
  handleUnitSystemChange,
  handleSortOptionChange,
}) {
  const [bags, setBags] = useState({});
  const { personalItem, cabinBag } = bags;

  function handleFormSave(type, dimensions) {
    if (dimensions === null) {
      setBags((prevBags) => {
        const newBags = { ...prevBags };
        delete newBags[type];
        return newBags;
      });
    } else {
      const adjustedDimensions =
        unitSystem === "imperial"
          ? {
              length: convertDimension(dimensions.length * 2.54, "metric"),
              width: convertDimension(dimensions.width * 2.54, "metric"),
              height: convertDimension(dimensions.height * 2.54, "metric"),
            }
          : dimensions;

      setBags((prevBags) => ({
        ...prevBags,
        [type]: adjustedDimensions,
      }));
    }
  }

  function handleButtonClick(sortOption) {
    handleSortOptionChange(sortOption);
  }

  return (
    <div>
      <H1>Settings</H1>
      <UnitSystem handleUnitSystemChange={handleUnitSystemChange} />
      <Sort
        handleSortOptionChange={handleSortOptionChange}
        handleButtonClick={handleButtonClick}
      />
      <br />
      <hr />
      <H1>My bags</H1>
      <MyBags
        personalItem={personalItem}
        cabinBag={cabinBag}
        unitSystem={unitSystem}
        handleFormSave={handleFormSave}
      />
      <br />
      <hr />
      <H1>Airline list</H1>
      <AirlineList airlines={airlines} unitSystem={unitSystem} bags={bags} />
    </div>
  );
}

const H1 = styled.h1`
  text-align: center;
  margin: 16px 0;
`;
