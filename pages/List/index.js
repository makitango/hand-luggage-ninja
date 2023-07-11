export default function List({ bags }) {
  return (
    <ul>
      {bags.map(({ slug, personalItem, cabinBag }) => {
        const personalItemVolumeMetric = (
          (personalItem.metric.length *
            personalItem.metric.width *
            personalItem.metric.height) /
          1000
        ).toFixed(1);

        const personalItemVolumeImperial = (
          (personalItem.metric.length *
            personalItem.metric.width *
            personalItem.metric.height) /
          1000
        ).toFixed(1);

        const cabinBagVolumeMetric = (
          (cabinBag.metric.length *
            cabinBag.metric.width *
            cabinBag.metric.height) /
          1000
        ).toFixed(1);

        const cabinBagVolumeImperial = (
          (cabinBag.metric.length *
            cabinBag.metric.width *
            cabinBag.metric.height) /
          1000
        ).toFixed(1);
        return (
          <li key={slug}>
            <h2>{slug}</h2>
            <h3>Personal item</h3>
            <p>
              {personalItem.metric.length}
              {" x "}
              {personalItem.metric.width}
              {" x "}
              {personalItem.metric.height} cm, {personalItemVolumeMetric} L
            </p>
            <p>
              {personalItem.imperial.length}
              {" x "}
              {personalItem.imperial.width}
              {" x "}
              {personalItem.imperial.height} in, {personalItemVolumeImperial} L
            </p>
            <h3>Cabin bag</h3>
            <p>
              {cabinBag.metric.length}
              {" x "}
              {cabinBag.metric.width}
              {" x "}
              {cabinBag.metric.height} cm, {cabinBagVolumeMetric} L
            </p>
            <p>
              {cabinBag.imperial.length}
              {" x "}
              {cabinBag.imperial.width}
              {" x "}
              {cabinBag.imperial.height} in, {cabinBagVolumeImperial} L
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
