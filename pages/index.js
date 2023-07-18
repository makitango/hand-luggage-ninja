import { useState } from "react";
import AirlineList from "@/components/AirlineList";
import MyBags from "@/components/MyBags";
import Sort from "@/components/Sort";
import UnitSystem from "@/components/UnitSystem";
import { calculateVolume, convertDimension } from "@/utils";

export default function HomePage({
  airlines,
  unitSystem,
  handleUnitSystemChange,
  handleSortOptionChange,
}) {
  const [bags, setBags] = useState({});
  const { personalItem, cabinBag } = bags;

  function handleFormSave(type, dimensions) {
    // Convert dimensions if necessary
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

  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      <h1>Hand luggage ninja</h1>
      <UnitSystem handleUnitSystemChange={handleUnitSystemChange} />
      <hr />
      <Sort handleSortOptionChange={handleSortOptionChange} />
      <hr />
      <MyBags
        personalItem={personalItem}
        cabinBag={cabinBag}
        unitSystem={unitSystem}
        handleFormSave={handleFormSave}
      />
      <hr />
      <AirlineList airlines={airlines} unitSystem={unitSystem} bags={bags} />
    </div>
  );
}
