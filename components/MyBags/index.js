import React, { useState } from "react";
import { calculateVolume, convertDimension } from "@/utils";
import BagForm from "./BagForm";

export default function MyBags({
  personalItem,
  cabinBag,
  unitSystem,
  handleFormSave,
}) {
  const [isPersonalItemEditVisible, setPersonalItemEditVisible] =
    useState(false);
  const [isCabinBagEditVisible, setCabinBagEditVisible] = useState(false);

  const handlePersonalItemEdit = () => {
    setPersonalItemEditVisible(true);
  };

  const handleCabinBagEdit = () => {
    setCabinBagEditVisible(true);
  };

  return (
    <>
      <h2>Personal Item</h2>
      {personalItem && !isPersonalItemEditVisible ? (
        <>
          <p>
            {convertDimension(personalItem.length, unitSystem)}
            {" x "}
            {convertDimension(personalItem.width, unitSystem)}
            {" x "}
            {convertDimension(personalItem.height, unitSystem)}
            {unitSystem === "metric" ? " cm" : " in"}
            {" | "} <strong>{calculateVolume(personalItem)} l</strong>
          </p>
          <button onClick={handlePersonalItemEdit}>Edit</button>
        </>
      ) : (
        <BagForm
          type="personalItem"
          handleFormSave={handleFormSave}
          unitSystem={unitSystem}
          initialValues={personalItem}
          onCancel={() => setPersonalItemEditVisible(false)}
        />
      )}

      <h2>Cabin Bag</h2>
      {cabinBag && !isCabinBagEditVisible ? (
        <>
          <p>
            {convertDimension(cabinBag.length, unitSystem)}
            {" x "}
            {convertDimension(cabinBag.width, unitSystem)}
            {" x "}
            {convertDimension(cabinBag.height, unitSystem)}
            {unitSystem === "metric" ? " cm" : " in"}
            {" | "} <strong>{calculateVolume(cabinBag)} l</strong>
          </p>
          <button onClick={handleCabinBagEdit}>Edit</button>
        </>
      ) : (
        <BagForm
          type="cabinBag"
          handleFormSave={handleFormSave}
          unitSystem={unitSystem}
          initialValues={cabinBag}
          onCancel={() => setCabinBagEditVisible(false)}
        />
      )}

      {personalItem && cabinBag && (
        <p>
          <strong>
            Combined volume{" "}
            {calculateVolume(personalItem) + calculateVolume(cabinBag)} l
          </strong>
        </p>
      )}
    </>
  );
}
