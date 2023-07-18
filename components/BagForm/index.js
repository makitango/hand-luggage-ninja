import { useState } from "react";

export default function BagForm({ type, handleFormSave }) {
  const [isFormVisible, setFormVisible] = useState(false);
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const handleFormCancel = () => {
    setFormVisible(false);
    setLength("");
    setWidth("");
    setHeight("");
  };

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

    // Hide the form
    setFormVisible(false);
  };

  const handleAdd = () => {
    setFormVisible(true);
  };

  return (
    <>
      {!isFormVisible && <button onClick={handleAdd}>Add</button>}

      {isFormVisible && (
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
          <button type="submit">Save</button>
          <button type="button" onClick={handleFormCancel}>
            Cancel
          </button>
        </form>
      )}
    </>
  );
}
