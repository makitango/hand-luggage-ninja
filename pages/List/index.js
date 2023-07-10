export default function List({ bags }) {
  console.log(bags);
  return (
    <ul>
      {bags.map((bag) => {
        console.log({ bags });

        return (
          <li key={bag.slug}>
            <h2>{bag.slug}</h2>
            <h3>Personal Item</h3>
            <h4>Metric</h4>
            <p>
              L{bag.personalItem.metric.length} W{bag.personalItem.metric.width}{" "}
              H{bag.personalItem.metric.height} cm
            </p>
            <h4>Imperial</h4>
            <p>
              L{bag.personalItem.imperial.length} W
              {bag.personalItem.imperial.width} H
              {bag.personalItem.imperial.height} in
            </p>
            <h3>Cabin bag</h3>
            <h4>Metric</h4>
            <p>
              L{bag.cabinBag.metric.length} W{bag.cabinBag.metric.width} H
              {bag.cabinBag.metric.height} cm
            </p>
            <h4>Imperial</h4>
            <p>
              L{bag.cabinBag.imperial.length} W{bag.cabinBag.imperial.width} H
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
