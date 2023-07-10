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
            <p>Length {bag.personalItem.metric.length} cm</p>
            <p>Width {bag.personalItem.metric.width} cm</p>
            <p>Height {bag.personalItem.metric.height} cm</p>
            <h4>Imperial</h4>
            <p>Length {bag.personalItem.imperial.length} in</p>
            <p>Width {bag.personalItem.imperial.width} in</p>
            <p>Height {bag.personalItem.imperial.height} in</p>
            <h3>Cabin bag</h3>
            <h4>Metric</h4>
            <p>Length {bag.cabinBag.metric.length} cm</p>
            <p>Width {bag.cabinBag.metric.width} cm</p>
            <p>Height {bag.cabinBag.metric.height} cm</p>
            <h4>Imperial</h4>
            <p>Length {bag.cabinBag.imperial.length} in</p>
            <p>Width {bag.cabinBag.imperial.width} in</p>
            <p>Height {bag.cabinBag.imperial.height} in</p>
          </li>
        );
      })}
    </ul>
  );
}
