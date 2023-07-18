import { useState } from "react";

export default function BagForm({ type, handleFormSave, handleFormCancel }) {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dimensions = {
      length: Number(length),
      width: Number(width),
      height: Number(height),
    };

    handleFormSave(type, dimensions);

    // Reset form fields
    setLength("");
    setWidth("");
    setHeight("");
  };

  const isFormValid = length !== "" && width !== "" && height !== "";
  const isNegativeNumber = length < 0 || width < 0 || height < 0;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Length:
        <input
          type="number"
          value={length}
          min="0"
          onChange={(e) => setLength(e.target.value)}
        />
      </label>
      <label>
        Width:
        <input
          type="number"
          value={width}
          min="0"
          onChange={(e) => setWidth(e.target.value)}
        />
      </label>
      <label>
        Height:
        <input
          type="number"
          value={height}
          min="0"
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      {isNegativeNumber && (
        <p>Please enter positive values for all dimensions.</p>
      )}
      <button type="submit" disabled={!isFormValid || isNegativeNumber}>
        Save
      </button>
      <button type="button" onClick={handleFormCancel}>
        Cancel
      </button>
    </form>
  );
}
