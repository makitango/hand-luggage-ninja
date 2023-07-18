import { useState } from "react";
import AirlineList from "@/components/AirlineList";
import BagForm from "@/components/BagForm";

export default function HomePage({
  handleSortOptionChange,
  airlines,
  unitSystem,
  handleUnitSystemChange,
}) {
  const [bags, setBags] = useState({});

  function handleFormSave(type, dimensions) {
    setBags((prevBags) => ({
      ...prevBags,
      [type]: dimensions,
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
      <div>
        <strong>Sort </strong>
        <button onClick={() => handleSortOptionChange("alphabetical")}>
          Alphabetical
        </button>
        <button onClick={() => handleSortOptionChange("personalItem")}>
          Personal item volume
        </button>
        <button onClick={() => handleSortOptionChange("cabinBag")}>
          Cabin bag volume
        </button>
        <button onClick={() => handleSortOptionChange("combined")}>
          Combined volume
        </button>
        <hr />
      </div>

      <h3>Personal Item</h3>
      {bags.personalItem ? (
        <p>
          Length: {bags.personalItem.length}, Width: {bags.personalItem.width},{" "}
          Height: {bags.personalItem.height}
        </p>
      ) : (
        <BagForm type="personalItem" handleFormSave={handleFormSave} />
      )}

      <h3>Cabin Bag</h3>
      {bags.cabinBag ? (
        <p>
          Length: {bags.cabinBag.length}, Width: {bags.cabinBag.width}, Height:{" "}
          {bags.cabinBag.height}
        </p>
      ) : (
        <BagForm type="cabinBag" handleFormSave={handleFormSave} />
      )}

      <AirlineList airlines={airlines} unitSystem={unitSystem} bags={bags} />
    </div>
  );
}
