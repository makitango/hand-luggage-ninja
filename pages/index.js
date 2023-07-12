import AirlineList from "@/components/AirlineList";

export default function HomePage({
  handleSortOptionChange,
  sortedAirlines,
  unitSystem,
  handleUnitToggle,
}) {
  return (
    <div>
      <button type="button" onClick={handleUnitToggle}>
        Change Unit System
      </button>
      <hr />
      <div>
        <button onClick={() => handleSortOptionChange("alphabetical")}>
          Sort Alphabetically
        </button>
        <button onClick={() => handleSortOptionChange("personalItem")}>
          Sort by Personal Item Volume
        </button>
        <button onClick={() => handleSortOptionChange("cabinBag")}>
          Sort by Cabin Bag Volume
        </button>
      </div>
      <AirlineList sortedAirlines={sortedAirlines} unitSystem={unitSystem} />
    </div>
  );
}
