import List from "../components/List";

export default function HomePage({
  bags,
  onSortBagsAlphabetical,
  onSortBagsPersonalItem,
  onSortBagsCabinBag,
}) {
  return (
    <div>
      <h1>Hand luggage ninja</h1>
      <h4>Sort by</h4>
      <button onClick={onSortBagsAlphabetical}>Alphabetical</button>
      <button onClick={onSortBagsPersonalItem}>Personal item</button>
      <button onClick={onSortBagsCabinBag}>Cabin bag</button>

      <List bags={bags} />
    </div>
  );
}
