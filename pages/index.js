import { useState } from "react";
import AirlineList from "@/components/AirlineList";
import BagForm from "@/components/BagForm";
import { calculateVolume, convertDimension } from "@/utils";

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
          {convertDimension(bags.personalItem.length, unitSystem)}
          {" x "}
          {convertDimension(bags.personalItem.width, unitSystem)}
          {" x "}
          {convertDimension(bags.personalItem.height, unitSystem)}
          {unitSystem === "metric" ? " cm" : " in"}
          {" | "} <strong>{calculateVolume(bags.personalItem)} l</strong>
        </p>
      ) : (
        <BagForm type="personalItem" handleFormSave={handleFormSave} />
      )}
      <h3>Cabin Bag</h3>
      {bags.cabinBag ? (
        <p>
          {convertDimension(bags.cabinBag.length, unitSystem)}
          {" x "}
          {convertDimension(bags.cabinBag.width, unitSystem)}
          {" x "}
          {convertDimension(bags.cabinBag.height, unitSystem)}
          {unitSystem === "metric" ? " cm" : " in"}
          {" | "} <strong>{calculateVolume(bags.cabinBag)} l</strong>
        </p>
      ) : (
        <BagForm type="cabinBag" handleFormSave={handleFormSave} />
      )}
      {bags.personalItem && bags.cabinBag && (
        <p>
          <strong>
            Combined volume{" "}
            {calculateVolume(bags.personalItem) +
              calculateVolume(bags.cabinBag)}{" "}
            l
          </strong>
        </p>
      )}
      <AirlineList airlines={airlines} unitSystem={unitSystem} bags={bags} />
    </div>
  );
}
