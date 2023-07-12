export default function AirlineList({ sortedAirlines, unitSystem }) {
  const convertUnits = (value, unitSystem) => {
    return unitSystem === "metric" ? value : Math.round(value * 0.3937);
  };

  return (
    <ul>
      {sortedAirlines.map(
        ({ id, name, personalItem, cabinBag, freeCabinBag }) => {
          const {
            length: personalItemLength,
            width: personalItemWidth,
            height: personalItemHeight,
          } = personalItem;

          const {
            length: cabinBagLength,
            width: cabinBagWidth,
            height: cabinBagHeight,
          } = cabinBag;

          return (
            <li key={id}>
              <h2>{name}</h2>
              <section>
                <strong>Size Personal Item:</strong>
                <p>
                  {`${Math.round(
                    convertUnits(personalItemLength, unitSystem)
                  )}`}
                  {" x "}
                  {`${Math.round(
                    convertUnits(personalItemWidth, unitSystem)
                  )} `}
                  {" x "}
                  {`${Math.round(
                    convertUnits(personalItemHeight, unitSystem)
                  )} ${unitSystem === "metric" ? "cm" : "in"}`}
                  {" | "}
                  {Math.round(
                    (personalItemLength *
                      personalItemWidth *
                      personalItemHeight) /
                      1000
                  )}{" "}
                  l
                </p>
                <strong>Cabin Bag:</strong>
                <p>
                  {`${Math.round(convertUnits(cabinBagLength, unitSystem))}`}
                  {" x "}
                  {`${Math.round(convertUnits(cabinBagWidth, unitSystem))} `}
                  {" x "}
                  {`${Math.round(convertUnits(cabinBagHeight, unitSystem))} ${
                    unitSystem === "metric" ? "cm" : "in"
                  }`}
                  {" | "}
                  {Math.round(
                    (cabinBagLength * cabinBagWidth * cabinBagHeight) / 1000
                  )}{" "}
                  l
                </p>
                <p>
                  {" "}
                  {freeCabinBag
                    ? ""
                    : "💰💰 Caution! Surcharge for cabin bag 💰💰"}
                </p>
              </section>
            </li>
          );
        }
      )}
    </ul>
  );
}
