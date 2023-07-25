import React, { useState } from "react";
import { calculateVolume, convertDimension } from "@/utils";
import { styled } from "styled-components";

export default function BagForm({
  type,
  handleFormSave,
  unitSystem,
  initialValues,
  onCancel,
}) {
  const [bags, setBags] = useState(initialValues || {});

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSave(type, bags);
    onCancel && onCancel();
  };

  const handleInputChange = (e, dimension) => {
    const value = e.target.value;

    setBags((prevBags) => ({
      ...prevBags,
      [dimension]: Number(value),
    }));
  };

  const isSaveDisabled =
    bags.length === undefined ||
    bags.width === undefined ||
    bags.height === undefined;

  return (
    <>
      {bags.length === undefined &&
      bags.width === undefined &&
      bags.height === undefined ? (
        <ButtonContainer>
          <Button
            onClick={() =>
              handleInputChange({ target: { value: "" } }, "length")
            }
          >
            Add
          </Button>
        </ButtonContainer>
      ) : (
        <form onSubmit={handleSubmit}>
          <List>
            <ListItem>
              <Label>
                Length:
                <Input
                  type="number"
                  value={bags.length || ""}
                  min="0"
                  onChange={(e) => handleInputChange(e, "length")}
                />
              </Label>
            </ListItem>
            <ListItem>
              <Label>
                Width:
                <Input
                  type="number"
                  value={bags.width || ""}
                  min="0"
                  onChange={(e) => handleInputChange(e, "width")}
                />
              </Label>
            </ListItem>
            <ListItem>
              <Label>
                Height:
                <Input
                  type="number"
                  value={bags.height || ""}
                  min="0"
                  onChange={(e) => handleInputChange(e, "height")}
                />
              </Label>
            </ListItem>
          </List>
          <ButtonContainer>
            <Button type="submit" disabled={isSaveDisabled}>
              Save
            </Button>
            <Button type="button" onClick={() => onCancel()}>
              Cancel
            </Button>
          </ButtonContainer>
        </form>
      )}
    </>
  );
}

const H4 = styled.h4`
  text-align: center;
  margin: 16px 0;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 16px;
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
