import { calculateVolume, convertDimension } from "@/utils";

export default function AirlineList({ sortedAirlines, unitSystem }) {
  return (
    <>
      {sortedAirlines.map(
        ({ id, name, personalItem, cabinBag, freeCabinBag }) => {
          return (
            <div key={id} style={{ border: "1px solid black", padding: 10 }}>
              <h2>{name}</h2>
              <section>
                <p>
                  <strong>Personal item </strong>
                  {convertDimension(personalItem.length, unitSystem)}
                  {" x "}
                  {convertDimension(personalItem.width, unitSystem)}
                  {" x "}
                  {convertDimension(personalItem.height, unitSystem)}
                  {unitSystem === "metric" ? " cm" : " in"}
                  {" | "}
                  <strong>{calculateVolume(personalItem)} l</strong>
                </p>

                <p>
                  <strong>Cabin bag </strong>
                  {convertDimension(cabinBag.length, unitSystem)}
                  {" x "}
                  {convertDimension(cabinBag.width, unitSystem)}
                  {" x "}
                  {convertDimension(cabinBag.height, unitSystem)}
                  {unitSystem === "metric" ? " cm" : " in"}
                  {" | "}
                  <strong>{calculateVolume(cabinBag)} l</strong>
                </p>

                <p> {freeCabinBag ? "" : "💰 Cabin bag costs extra 💰"}</p>
              </section>
            </div>
          );
        }
      )}
    </>
  );
}
