import { useState } from "react";

export default function BagForm({ type, handleFormSave }) {
  const [isFormVisible, setFormVisible] = useState(false);
  const [bags, setBags] = useState({ [type]: {} });

  const handleFormCancel = () => {
    setFormVisible(false);
    setBags((prevBags) => ({
      ...prevBags,
      [type]: {},
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleFormSave(type, bags[type]);

    // Reset form fields
    setBags((prevBags) => ({
      ...prevBags,
      [type]: {},
    }));

    // Hide the form
    setFormVisible(false);
  };

  const handleAdd = () => {
    setFormVisible(true);
  };

  const handleInputChange = (e, dimension) => {
    const value = e.target.value;

    setBags((prevBags) => ({
      ...prevBags,
      [type]: {
        ...prevBags[type],
        [dimension]: Number(value),
      },
    }));
  };

  const isSaveDisabled =
    bags[type].length === undefined ||
    bags[type].width === undefined ||
    bags[type].height === undefined;

  return (
    <>
      {!isFormVisible && <button onClick={handleAdd}>Add</button>}

      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <label>
            Length:
            <input
              type="number"
              value={bags[type].length || ""}
              min="0"
              onChange={(e) => handleInputChange(e, "length")}
            />
          </label>
          <label>
            Width:
            <input
              type="number"
              value={bags[type].width || ""}
              min="0"
              onChange={(e) => handleInputChange(e, "width")}
            />
          </label>
          <label>
            Height:
            <input
              type="number"
              value={bags[type].height || ""}
              min="0"
              onChange={(e) => handleInputChange(e, "height")}
            />
          </label>
          <button type="submit" disabled={isSaveDisabled}>
            Save
          </button>
          <button type="button" onClick={handleFormCancel}>
            Cancel
          </button>
        </form>
      )}
    </>
  );
}
