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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Length:
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </label>
      <label>
        Width:
        <input
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </label>
      <label>
        Height:
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={handleFormCancel}>
        Cancel
      </button>
    </form>
  );
}
