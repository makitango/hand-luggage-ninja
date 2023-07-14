export default function AirlineList({
  airline: { key, name, personalItem, cabinBag, freeCabinBag },
  metricSystem,
  personalItemVolume,
  cabinBagVolume,
}) {
  return (
    <div key={key} style={{ border: "1px solid black", padding: 10 }}>
      <h2>{name}</h2>
      <p>
        <strong>Personal item: </strong>
        {personalItem.length} x {personalItem.width} x {personalItem.height}
        {metricSystem ? " cm" : " inch"}
        {" | "}
        {personalItemVolume} l
      </p>
      <p></p>
      <p>
        <strong>Cabin bag: </strong>
        {cabinBag.length} x {cabinBag.width} x {cabinBag.height}
        {metricSystem ? " cm" : " inch"}
        {" | "}
        {cabinBagVolume} l
      </p>
      {freeCabinBag ? "" : "💰💰 Cabin bag not free 💰💰"}
    </div>
  );
}
