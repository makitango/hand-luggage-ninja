import { useState } from "react";
import AirlineList from "@/components/AirlineList";
import MyBags from "@/components/MyBags";
import Sort from "@/components/Sort";
import { calculateVolume, convertDimension } from "@/utils";

export default function HomePage({
  airlines,
  unitSystem,
  handleUnitSystemChange,
  handleSortOptionChange, // Add the missing prop
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
    <div>
      <h1>Hand luggage ninja</h1>
      <strong>Select unit system </strong>
      <button type="button" onClick={() => handleUnitSystemChange("metric")}>
        Metric
      </button>
      <button type="button" onClick={() => handleUnitSystemChange("imperial")}>
        Imperial
      </button>
      <hr />
      <Sort handleSortOptionChange={handleSortOptionChange} />{" "}
      {/* Pass the prop */}
      <MyBags
        personalItem={personalItem}
        cabinBag={cabinBag}
        unitSystem={unitSystem}
        handleFormSave={handleFormSave}
      />
      <AirlineList airlines={airlines} unitSystem={unitSystem} bags={bags} />
    </div>
  );
}
