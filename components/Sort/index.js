import React from "react";
import styled from "styled-components";

export default function Sort({ handleSortOptionChange }) {
  return (
    <div>
      <H4>
        <strong>Sort</strong>
      </H4>
      <ButtonContainer>
        <Button onClick={() => handleSortOptionChange("alphabetical")}>
          Alphabetical
        </Button>
        <Button onClick={() => handleSortOptionChange("personalItem")}>
          Personal item volume
        </Button>
        <Button onClick={() => handleSortOptionChange("cabinBag")}>
          Cabin bag volume
        </Button>
        <Button onClick={() => handleSortOptionChange("combined")}>
          Combined volume
        </Button>
      </ButtonContainer>
    </div>
  );
}

const H4 = styled.h4`
  text-align: center;
  margin: 16px 0;
`;

const ButtonContainer = styled.section`
  display: flex;
  flex-direction: column;
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
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 1em;
  background-color: #ffffff;
  color: #333333;
  border: none;
  border-bottom: 1px solid #dddddd;
  font-size: 16px;
  font-weight: 500;
  text-align: center;

  &:hover {
    background-color: #f2f2f2;
  }

  &:active {
    background-color: #e6e6e6;
  }

  &:last-child {
    border-bottom: none;
    border-radius: 0 0 16px 16px;
  }

  &:first-child {
    border-radius: 16px 16px 0 0;
  }
`;
