import React, { useState } from "react";
import styled from "styled-components";

export default function Sort({ handleSortOptionChange }) {
  const [activeSortOption, setActiveSortOption] = useState("alphabetical");

  function handleButtonClick(sortOption) {
    setActiveSortOption(sortOption);
    handleSortOptionChange(sortOption);
  }

  return (
    <div>
      <H4>
        <strong>Sort</strong>
      </H4>
      <ButtonContainer>
        <Button
          isActive={activeSortOption === "alphabetical"}
          onClick={() => handleButtonClick("alphabetical")}
        >
          Alphabetical
        </Button>
        <Button
          isActive={activeSortOption === "personalItem"}
          onClick={() => handleButtonClick("personalItem")}
        >
          Personal item volume
        </Button>
        <Button
          isActive={activeSortOption === "cabinBag"}
          onClick={() => handleButtonClick("cabinBag")}
        >
          Cabin bag volume
        </Button>
        <Button
          isActive={activeSortOption === "combined"}
          onClick={() => handleButtonClick("combined")}
          isLastChild
        >
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
  background-color: ${(props) => (props.isActive ? "#3700b3" : "#6200ee")};
  color: #ffffff;
  border: none;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  transition: background-color 0.3s ease-in-out;
  border-radius: 0;
  border-bottom: ${(props) =>
    props.isLastChild ? "none" : "1px solid #dddddd"};
  margin-bottom: ${(props) => (props.isLastChild ? "0" : "-1px")};

  &:hover {
    background-color: ${(props) => (props.isActive ? "#4d00b3" : "#3700b3")};
  }

  &:active {
    background-color: ${(props) => (props.isActive ? "#aa00ff" : "#4d00b3")};
  }
`;
