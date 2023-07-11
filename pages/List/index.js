export default function List({ bags }) {
  return (
    <ul>
      {bags.map(({ slug, personalItem, cabinBag }) => {
        return (
          <li key={slug}>
            <h2>{slug}</h2>
            <h3>Personal item</h3>
            <p>
              {personalItem.metric.length}x{personalItem.metric.width}x
              {personalItem.metric.height} cm
            </p>
            <p>
              {personalItem.imperial.length}x{personalItem.imperial.width}x
              {personalItem.imperial.height} in
            </p>
            <h3>Cabin bag</h3>
            <p>
              {cabinBag.metric.length}x{cabinBag.metric.width}x
              {cabinBag.metric.height} cm
            </p>
            <p>
              {cabinBag.imperial.length}x{cabinBag.imperial.width}x
              {cabinBag.imperial.height} in
            </p>
            <p>
              {cabinBag.isIncluded
                ? ""
                : "💰💰 Caution! Surcharge for cabin bag 💰💰"}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
