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
  const [bags, setBags] = useState({
    personalItem: {
      bag: personalItem,
      deleted: false,
      remainingSeconds: 0,
    },
    cabinBag: {
      bag: cabinBag,
      deleted: false,
      remainingSeconds: 0,
    },
  });

  useEffect(() => {
    let timerPersonal;
    let timerCabin;

    if (bags.personalItem.deleted && bags.personalItem.remainingSeconds > 0) {
      timerPersonal = setInterval(() => {
        setBags((prevBags) => ({
          ...prevBags,
          personalItem: {
            ...prevBags.personalItem,
            remainingSeconds: prevBags.personalItem.remainingSeconds - 1,
          },
        }));
      }, 1000);
    } else if (
      bags.personalItem.deleted &&
      bags.personalItem.remainingSeconds === 0
    ) {
      if (bags.personalItem.undoDelete) {
        setBags((prevBags) => ({
          ...prevBags,
          personalItem: {
            ...prevBags.personalItem,
            deleted: false,
            undoDelete: false,
          },
        }));
      } else {
        handleFormSave("personalItem", null);
        setBags((prevBags) => ({
          ...prevBags,
          personalItem: {
            ...prevBags.personalItem,
            deleted: false,
          },
        }));
      }
    }

    if (bags.cabinBag.deleted && bags.cabinBag.remainingSeconds > 0) {
      timerCabin = setInterval(() => {
        setBags((prevBags) => ({
          ...prevBags,
          cabinBag: {
            ...prevBags.cabinBag,
            remainingSeconds: prevBags.cabinBag.remainingSeconds - 1,
          },
        }));
      }, 1000);
    } else if (bags.cabinBag.deleted && bags.cabinBag.remainingSeconds === 0) {
      if (bags.cabinBag.undoDelete) {
        setBags((prevBags) => ({
          ...prevBags,
          cabinBag: {
            ...prevBags.cabinBag,
            deleted: false,
            undoDelete: false,
          },
        }));
      } else {
        handleFormSave("cabinBag", null);
        setBags((prevBags) => ({
          ...prevBags,
          cabinBag: {
            ...prevBags.cabinBag,
            deleted: false,
          },
        }));
      }
    }

    return () => {
      clearInterval(timerPersonal);
      clearInterval(timerCabin);
    };
  }, [bags, handleFormSave]);

  const handleEdit = (type) => {
    setEditType(type);
  };

  const handleCancelEdit = () => {
    setEditType(null);
  };

  const handleBagDelete = (type) => {
    setBags((prevBags) => ({
      ...prevBags,
      [type]: {
        ...prevBags[type],
        deleted: true,
        remainingSeconds: 10,
      },
    }));
    setEditType(null);
  };

  const handleUndoDelete = (type) => {
    setBags((prevBags) => ({
      ...prevBags,
      [type]: {
        ...prevBags[type],
        undoDelete: true,
        remainingSeconds: 0,
      },
    }));
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
          {bags.personalItem.deleted ? (
            <button onClick={() => handleUndoDelete("personalItem")}>
              Undo delete? ({bags.personalItem.remainingSeconds})
            </button>
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
          {bags.cabinBag.deleted ? (
            <button onClick={() => handleUndoDelete("cabinBag")}>
              Undo delete? ({bags.cabinBag.remainingSeconds})
            </button>
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
