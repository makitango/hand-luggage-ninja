import React, { useState, useEffect } from "react";
import { calculateVolume, convertDimension } from "@/utils";
import BagForm from "./BagForm";
import { styled } from "styled-components";

export default function MyBags({
  personalItem,
  cabinBag,
  unitSystem,
  handleFormSave,
}) {
  const [bags, setBags] = useState({
    personalItem: {
      ...personalItem,
      deleted: false,
      remainingSeconds: 0,
      editType: false,
    },
    cabinBag: {
      ...cabinBag,
      deleted: false,
      remainingSeconds: 0,
      editType: false,
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

  function handleEdit(type) {
    setBags((prevBags) => ({
      ...prevBags,
      [type]: {
        ...prevBags[type],
        editType: true,
      },
    }));
  }

  function handleCancelEdit(type) {
    setBags((prevBags) => ({
      ...prevBags,
      [type]: {
        ...prevBags[type],
        editType: false,
      },
    }));
  }

  function handleBagDelete(type) {
    setBags((prevBags) => ({
      ...prevBags,
      [type]: {
        ...prevBags[type],
        deleted: true,
        remainingSeconds: 3,
        editType: false,
      },
    }));
  }

  function handleUndoDelete(type) {
    setBags((prevBags) => ({
      ...prevBags,
      [type]: {
        ...prevBags[type],
        undoDelete: true,
        remainingSeconds: 0,
      },
    }));
  }

  return (
    <>
      <H2>Personal Item</H2>
      {personalItem && !bags.personalItem.editType ? (
        <>
          <P>
            {convertDimension(personalItem.length, unitSystem)}
            {" x "}
            {convertDimension(personalItem.width, unitSystem)}
            {" x "}
            {convertDimension(personalItem.height, unitSystem)}
            {unitSystem === "metric" ? " cm" : " in"}
            {" | "} <strong>{calculateVolume(personalItem)} l</strong>
          </P>{" "}
          <ButtonContainer>
            {bags.personalItem.deleted ? (
              <Button onClick={() => handleUndoDelete("personalItem")}>
                Undo delete? ({bags.personalItem.remainingSeconds})
              </Button>
            ) : (
              <>
                <Button onClick={() => handleEdit("personalItem")}>Edit</Button>
                <Button onClick={() => handleBagDelete("personalItem")}>
                  Delete
                </Button>
              </>
            )}{" "}
          </ButtonContainer>
        </>
      ) : (
        <BagForm
          type="personalItem"
          handleFormSave={handleFormSave}
          unitSystem={unitSystem}
          initialValues={personalItem}
          onCancel={() => handleCancelEdit("personalItem")}
        />
      )}

      <H2>Cabin Bag</H2>
      {cabinBag && !bags.cabinBag.editType ? (
        <>
          <P>
            {convertDimension(cabinBag.length, unitSystem)}
            {" x "}
            {convertDimension(cabinBag.width, unitSystem)}
            {" x "}
            {convertDimension(cabinBag.height, unitSystem)}
            {unitSystem === "metric" ? " cm" : " in"}
            {" | "}
            <strong>{calculateVolume(cabinBag)} l</strong>
          </P>{" "}
          <ButtonContainer>
            {bags.cabinBag.deleted ? (
              <Button onClick={() => handleUndoDelete("cabinBag")}>
                Undo delete? ({bags.cabinBag.remainingSeconds})
              </Button>
            ) : (
              <>
                <Button onClick={() => handleEdit("cabinBag")}>Edit</Button>
                <Button onClick={() => handleBagDelete("cabinBag")}>
                  Delete
                </Button>
              </>
            )}
          </ButtonContainer>
        </>
      ) : (
        <BagForm
          type="cabinBag"
          handleFormSave={handleFormSave}
          unitSystem={unitSystem}
          initialValues={cabinBag}
          onCancel={() => handleCancelEdit("cabinBag")}
        />
      )}

      {personalItem && cabinBag && (
        <P>
          <strong>
            Combined volume{" "}
            {calculateVolume(personalItem) + calculateVolume(cabinBag)} l
          </strong>
        </P>
      )}
    </>
  );
}

const H2 = styled.h2`
  text-align: center;
  margin: 16px 0;
`;

const P = styled.p`
  text-align: center;
  margin: 16px 0;
`;
const ButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  border: none;
  border-radius: 16px;
  overflow: hidden;
  width: 300px;
  margin: auto;
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    background-color: #f2f2f2;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.button`
  flex: 1;
  height: 50px;
  margin: 0;
  padding: 1em;
  background-color: #6200ee;
  color: #ffffff;
  border: none;
  border-bottom: 1px solid #dddddd;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #3700b3;
  }

  &:active {
    background-color: #aa00ff;
  }

  &:first-child {
    border-radius: 16px 0 0 16px;
  }

  &:last-child {
    border-radius: 0 16px 16px 0;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 500;
  color: #6200ee;
`;

const Input = styled.input`
  width: 100%;
  height: 36px;
  padding: 8px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #6200ee;
  border-radius: 8px;
  margin-top: 4px;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: #3700b3;
  }
`;
