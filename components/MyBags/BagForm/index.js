import { useState } from "react";

export default function BagForm({
  type,
  handleFormSave,
  unitSystem,
  initialValues,
  onCancel,
}) {
  const [isFormVisible, setFormVisible] = useState(false);
  const [bags, setBags] = useState(initialValues || {});

  const handleFormCancel = () => {
    setFormVisible(false);
    setBags({});
    onCancel && onCancel();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleFormSave(type, bags);

    setBags({});
    setFormVisible(false);
  };

  const handleAdd = () => {
    setFormVisible(true);
  };

  const handleInputChange = (e, dimension) => {
    const value = e.target.value;

    setBags((prevBags) => ({
      ...prevBags,
      [dimension]: Number(value),
    }));
  };

  const isSaveDisabled =
    bags.length === undefined ||
    bags.width === undefined ||
    bags.height === undefined;

  return (
    <>
      {!isFormVisible && <button onClick={handleAdd}>Add</button>}

      {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <label>
            Length:
            <input
              type="number"
              value={bags.length || ""}
              min="0"
              onChange={(e) => handleInputChange(e, "length")}
            />
          </label>
          <label>
            Width:
            <input
              type="number"
              value={bags.width || ""}
              min="0"
              onChange={(e) => handleInputChange(e, "width")}
            />
          </label>
          <label>
            Height:
            <input
              type="number"
              value={bags.height || ""}
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
