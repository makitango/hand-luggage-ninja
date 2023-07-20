import React from "react";

export default function Sort({ handleSortOptionChange }) {
  return (
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
    </div>
  );
}
