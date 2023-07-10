export default function List({ bags }) {
  return (
    <ul>
      {bags.map((bag) => {
        return (
          <li key={bag.slug}>
            <h2>{bag.slug}</h2>
            <h3>Personal Item</h3>
            <h4>Metric</h4>
            <p>
              {bag.personalItem.metric.length}x{bag.personalItem.metric.width}x
              {bag.personalItem.metric.height} cm
            </p>
            <h4>Imperial</h4>
            <p>
              {bag.personalItem.imperial.length}x
              {bag.personalItem.imperial.width}x
              {bag.personalItem.imperial.height} in
            </p>
            <h3>Cabin bag</h3>
            <h4>Metric</h4>
            <p>
              {bag.cabinBag.metric.length}x{bag.cabinBag.metric.width}x
              {bag.cabinBag.metric.height} cm
            </p>
            <h4>Imperial</h4>
            <p>
              {bag.cabinBag.imperial.length}x{bag.cabinBag.imperial.width}x
              {bag.cabinBag.imperial.height} in
            </p>
            <p>
              {bag.cabinBag.isIncluded
                ? ""
                : "💰💰 Caution! Surcharge for cabin bag 💰💰"}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
