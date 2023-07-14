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
        <strong>Personal item </strong>
        {Math.round(personalItem.length)} x {Math.round(personalItem.width)} x
        {Math.round(personalItem.height)}
        {metricSystem ? " cm" : " inch"}
        {" | "}
        <strong>{personalItemVolume} l</strong>
      </p>
      <p>
        <strong>Cabin bag </strong>
        {Math.round(cabinBag.length)} x {Math.round(cabinBag.width)} x
        {Math.round(cabinBag.height)}
        {metricSystem ? " cm" : " inch"}
        {" | "}
        <strong>{cabinBagVolume} l</strong>
      </p>
      {freeCabinBag ? "" : "💰💰 Cabin bag not free 💰💰"}
    </div>
  );
}
