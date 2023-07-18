import { calculateVolume, convertDimension } from "@/utils";
import BagForm from "./BagForm";

export default function MyBags({
  personalItem,
  cabinBag,
  unitSystem,
  handleFormSave,
}) {
  return (
    <>
      <h2>Personal Item</h2>
      {personalItem ? (
        <p>
          {convertDimension(personalItem.length, unitSystem)}
          {" x "}
          {convertDimension(personalItem.width, unitSystem)}
          {" x "}
          {convertDimension(personalItem.height, unitSystem)}
          {unitSystem === "metric" ? " cm" : " in"}
          {" | "} <strong>{calculateVolume(personalItem)} l</strong>
        </p>
      ) : (
        <BagForm
          type="personalItem"
          handleFormSave={handleFormSave}
          unitSystem={unitSystem}
        />
      )}

      <h2>Cabin Bag</h2>
      {cabinBag ? (
        <p>
          {convertDimension(cabinBag.length, unitSystem)}
          {" x "}
          {convertDimension(cabinBag.width, unitSystem)}
          {" x "}
          {convertDimension(cabinBag.height, unitSystem)}
          {unitSystem === "metric" ? " cm" : " in"}
          {" | "} <strong>{calculateVolume(cabinBag)} l</strong>
        </p>
      ) : (
        <BagForm
          type="cabinBag"
          handleFormSave={handleFormSave}
          unitSystem={unitSystem}
        />
      )}
      {personalItem && cabinBag && (
        <p>
          <strong>
            Combined volume{" "}
            {calculateVolume(personalItem) + calculateVolume(cabinBag)} l
          </strong>
        </p>
      )}
    </>
  );
}
