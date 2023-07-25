import React, { useState } from "react";
import styled from "styled-components";

export default function UnitSystem({ handleUnitSystemChange }) {
  const [activeUnitSystem, setActiveUnitSystem] = useState("metric");

  const handleButtonClick = (unitSystem) => {
    setActiveUnitSystem(unitSystem);
    handleUnitSystemChange(unitSystem);
  };

  return (
    <>
      <H4>Unit system</H4>
      <ButtonContainer>
        <Button
          isActive={activeUnitSystem === "metric"}
          type="button"
          onClick={() => handleButtonClick("metric")}
        >
          Metric
        </Button>
        <Button
          isActive={activeUnitSystem === "imperial"}
          type="button"
          onClick={() => handleButtonClick("imperial")}
        >
          Imperial
        </Button>
      </ButtonContainer>
    </>
  );
}

const H4 = styled.h4`
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
  background-color: ${(props) => (props.isActive ? "#3700b3" : "#6200ee")};
  color: #ffffff;
  border: none;
  border-bottom: 1px solid #dddddd;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#3700b3" : "#4d00b3")};
  }

  &:active {
    background-color: ${(props) => (props.isActive ? "#aa00ff" : "#4d00b3")};
  }

  &:first-child {
    border-radius: 16px 0 0 16px;
  }

  &:last-child {
    border-radius: 0 16px 16px 0;
  }
`;
