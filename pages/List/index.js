export default function List({ bags }) {
  return (
    <ul>
      {bags.map((bag) => {
        return (
          <li key={bag.slug}>
            {bag.slug.value}
            <li>
              Personal item height={bag.personalItem.height.value}
              width={bag.personalItem.width.value}
              depth={bag.personalItem.depth.value}
            </li>
            <li>
              Cabin bag height={bag.cabinBag.height.value}
              width={bag.cabinBag.width.value}
              depth={bag.cabinBag.depth.value}
            </li>
          </li>
        );
      })}
    </ul>
  );
}
