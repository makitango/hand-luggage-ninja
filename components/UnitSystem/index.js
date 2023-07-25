import React from "react";
import { styled } from "styled-components";

export default function UnitSystem({ handleUnitSystemChange }) {
  return (
    <>
      <H4>Unit system</H4>
      <ButtonContainer>
        <Button type="button" onClick={() => handleUnitSystemChange("metric")}>
          Metric
        </Button>
        <Button
          type="button"
          onClick={() => handleUnitSystemChange("imperial")}
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
