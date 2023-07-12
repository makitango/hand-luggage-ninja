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
                <h3>Size Personal Item:</h3>
                <ul>
                  <li>
                    <strong>Length:</strong>{" "}
                    {`${Math.round(
                      convertUnits(personalItemLength, unitSystem)
                    )} ${unitSystem === "metric" ? "cm" : "in"}`}
                  </li>
                  <li>
                    <strong>Width:</strong>{" "}
                    {`${Math.round(
                      convertUnits(personalItemWidth, unitSystem)
                    )} ${unitSystem === "metric" ? "cm" : "in"}`}
                  </li>
                  <li>
                    <strong>Height:</strong>{" "}
                    {`${Math.round(
                      convertUnits(personalItemHeight, unitSystem)
                    )} ${unitSystem === "metric" ? "cm" : "in"}`}
                  </li>
                  <li>
                    <strong>Volume: </strong>
                    {Math.round(
                      (personalItemLength *
                        personalItemWidth *
                        personalItemHeight) /
                        1000
                    )}{" "}
                    l
                  </li>
                </ul>
                <h3>Cabin Bag:</h3>
                <ul>
                  <li>
                    <strong>Length:</strong>{" "}
                    {`${Math.round(convertUnits(cabinBagLength, unitSystem))} ${
                      unitSystem === "metric" ? "cm" : "in"
                    }`}
                  </li>
                  <li>
                    <strong>Width:</strong>{" "}
                    {`${Math.round(convertUnits(cabinBagWidth, unitSystem))} ${
                      unitSystem === "metric" ? "cm" : "in"
                    }`}
                  </li>
                  <li>
                    <strong>Height:</strong>{" "}
                    {`${Math.round(convertUnits(cabinBagHeight, unitSystem))} ${
                      unitSystem === "metric" ? "cm" : "in"
                    }`}
                  </li>
                  <li>
                    <strong>Volume: </strong>
                    {Math.round(
                      (cabinBagLength * cabinBagWidth * cabinBagHeight) / 1000
                    )}{" "}
                    l
                  </li>
                  <li>
                    {" "}
                    {freeCabinBag
                      ? ""
                      : "💰💰 Caution! Surcharge for cabin bag 💰💰"}
                  </li>
                </ul>
              </section>
            </li>
          );
        }
      )}
    </ul>
  );
}
