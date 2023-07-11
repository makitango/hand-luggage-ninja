export default function List({ bags }) {
  return (
    <ul>
      {bags.map(({ slug, personalItem, cabinBag }) => {
        const personalItemVolume = (
          (personalItem.metric.length *
            personalItem.metric.width *
            personalItem.metric.height) /
          1000
        ).toFixed(1);

        const cabinBagVolume = (
          (cabinBag.metric.length *
            cabinBag.metric.width *
            cabinBag.metric.height) /
          1000
        ).toFixed(1);

        return (
          <>
            <li key={slug}>
              <h2>{slug}</h2>
              <h3>Personal item</h3>
              <p>
                {personalItem.metric.length}
                {" x "}
                {personalItem.metric.width}
                {" x "}
                {personalItem.metric.height} cm, {personalItemVolume} L
              </p>
              <p>
                {(personalItem.metric.length / 2.54).toFixed(1)}
                {" x "}
                {(personalItem.metric.width / 2.54).toFixed(1)}
                {" x "}
                {(personalItem.metric.height / 2.54).toFixed(1)} in,{" "}
                {personalItemVolume} L
              </p>
              <h3>Cabin bag</h3>
              <p>
                {cabinBag.metric.length}
                {" x "}
                {cabinBag.metric.width}
                {" x "}
                {cabinBag.metric.height} cm, {cabinBagVolume} L
              </p>
              <p>
                {(cabinBag.metric.length / 2.54).toFixed(1)}
                {" x "}
                {(cabinBag.metric.width / 2.54).toFixed(1)}
                {" x "}
                {(cabinBag.metric.height / 2.54).toFixed(1)} in,{" "}
                {cabinBagVolume} L
              </p>
              <p>
                {cabinBag.isIncluded
                  ? ""
                  : "💰💰 Caution! Surcharge for cabin bag 💰💰"}
              </p>
            </li>
          </>
        );
      })}
    </ul>
  );
}
