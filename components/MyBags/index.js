import React, { useState, useEffect } from "react";
import { calculateVolume, convertDimension } from "@/utils";
import BagForm from "./BagForm";

export default function MyBags({
  personalItem,
  cabinBag,
  unitSystem,
  handleFormSave,
}) {
  const [editType, setEditType] = useState(null);
  const [deletedBagType, setDeletedBagType] = useState(null);

  const handleEdit = (type) => {
    setEditType(type);
  };

  const handleCancelEdit = () => {
    setEditType(null);
  };

  const handleBagDelete = (type) => {
    setDeletedBagType(type);
    setTimeout(() => {
      handleFormSave(type, null); // Pass null dimensions to indicate deletion
      setDeletedBagType(null);
    }, 10000);
  };

  const handleUndoDelete = () => {
    setDeletedBagType(null);
  };

  return (
    <>
      <h2>Personal Item</h2>
      {personalItem && editType !== "personalItem" ? (
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
          {deletedBagType === "personalItem" ? (
            <>
              <button onClick={handleUndoDelete}>Undo delete?</button>
            </>
          ) : (
            <>
              <button onClick={() => handleEdit("personalItem")}>Edit</button>
              <button onClick={() => handleBagDelete("personalItem")}>
                Delete
              </button>
            </>
          )}
        </>
      ) : (
        <BagForm
          type="personalItem"
          handleFormSave={handleFormSave}
          unitSystem={unitSystem}
          initialValues={personalItem}
          onCancel={handleCancelEdit}
        />
      )}

      <h2>Cabin Bag</h2>
      {cabinBag && editType !== "cabinBag" ? (
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
          {deletedBagType === "cabinBag" ? (
            <>
              <button onClick={handleUndoDelete}>Undo delete?</button>
            </>
          ) : (
            <>
              <button onClick={() => handleEdit("cabinBag")}>Edit</button>
              <button onClick={() => handleBagDelete("cabinBag")}>
                Delete
              </button>
            </>
          )}
        </>
      ) : (
        <BagForm
          type="cabinBag"
          handleFormSave={handleFormSave}
          unitSystem={unitSystem}
          initialValues={cabinBag}
          onCancel={handleCancelEdit}
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
