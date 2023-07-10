import { data } from "/components/List/data";

export default function List({ data }) {
  return (
    <ul>
      {data.map((data) => {
        return (
          <li key={data.slug}>
            {data.slug}
            <li>
              Personal item height={data.personalItem.height.value}
              width={data.personalItem.width.value}
              depth={data.personalItem.depth.value}
            </li>
            <li>
              Cabin bag height={data.cabinBag.height.value}
              width={data.cabinBag.width.value}
              depth={data.cabinBag.depth.value}
            </li>
          </li>
        );
      })}
    </ul>
  );
}
