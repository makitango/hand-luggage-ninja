export default function AirlineList({
  airline: { key, name, personalItem, cabinBag, freeCabinBag },
  metricSystem,
  calculateVolume,
}) {
  return (
    <div key={key} style={{ border: "1px solid black", padding: 10 }}>
      <p>{name}</p>
      <p>
        Personal Item in {metricSystem ? "cm" : "inch"}: l:{" "}
        {personalItem.length} w: {personalItem.width} h: {personalItem.height}
        {/* {calculateVolume(personalItem)} */}
      </p>
      <p>
        Cabin bag in {metricSystem ? "cm" : "inch"}: l: {cabinBag.length} w:{" "}
        {cabinBag.width} h: {cabinBag.height}
      </p>
      {freeCabinBag ? "" : "💰💰 Cabin bag not free 💰💰"}
    </div>
  );
}

// export default function AirlineList({ sortedAirlines, unitSystem }) {
//   const convertUnits = (value, unitSystem) => {
//     return unitSystem === "metric" ? value : Math.round(value * 0.3937);
//   };

//   const renderPersonalItemInfo = (personalItem) => {
//     const { length, width, height } = personalItem;
//     const convertedLength = Math.round(convertUnits(length, unitSystem));
//     const convertedWidth = Math.round(convertUnits(width, unitSystem));
//     const convertedHeight = Math.round(convertUnits(height, unitSystem));

//     return (
//       <>
//         <strong>Size Personal Item:</strong>
//         <p>
//           {`${convertedLength}`} x {`${convertedWidth}`} x{" "}
//           {`${convertedHeight} ${unitSystem === "metric" ? "cm" : "in"}`}
//           {" | "}
//           {Math.round((length * width * height) / 1000)} l
//         </p>
//       </>
//     );
//   };

//   const renderCabinBagInfo = (cabinBag, freeCabinBag) => {
//     const { length, width, height } = cabinBag;
//     const convertedLength = Math.round(convertUnits(length, unitSystem));
//     const convertedWidth = Math.round(convertUnits(width, unitSystem));
//     const convertedHeight = Math.round(convertUnits(height, unitSystem));

//     return (
//       <>
//         <strong>Cabin Bag:</strong>
//         <p>
//           {`${convertedLength}`} x {`${convertedWidth}`} x{" "}
//           {`${convertedHeight} ${unitSystem === "metric" ? "cm" : "in"}`}
//           {" | "}
//           {Math.round((length * width * height) / 1000)} l
//         </p>
//         <p>
//           {freeCabinBag ? "" : "💰💰 Caution! Surcharge for cabin bag 💰💰"}
//         </p>
//       </>
//     );
//   };

//   return (
//     <ul>
//       {sortedAirlines.map(
//         ({ id, name, personalItem, cabinBag, freeCabinBag }) => (
//           <li key={id}>
//             <h2>{name}</h2>
//             <section>
//               {renderPersonalItemInfo(personalItem)}
//               {renderCabinBagInfo(cabinBag, freeCabinBag)}
//             </section>
//           </li>
//         )
//       )}
//     </ul>
//   );
// }
