import React from "react";

export default function UnitSystem({ handleUnitSystemChange }) {
  return (
    <>
      <strong>Select unit system </strong>
      <button type="button" onClick={() => handleUnitSystemChange("metric")}>
        Metric
      </button>
      <button type="button" onClick={() => handleUnitSystemChange("imperial")}>
        Imperial
      </button>
    </>
  );
}
