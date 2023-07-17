import AirlineList from "@/components/AirlineList";

export default function HomePage({
  handleSortOptionChange,
  sortedAirlines,
  unitSystem,
  handleUnitSystemChange,
}) {
  return (
    <div>
      <h1>Hand luggage ninja</h1>
      <strong>Select unit system </strong>
      <button type="button" onClick={() => handleUnitSystemChange("metric")}>
        Metric
      </button>
      <button type="button" onClick={() => handleUnitSystemChange("imperial")}>
        Imperial
      </button>
      <hr />
      <div>
        <strong>Sort </strong>
        <button onClick={() => handleSortOptionChange("alphabetical")}>
          alphabetical
        </button>
        <button onClick={() => handleSortOptionChange("personalItem")}>
          personal item volume
        </button>
        <button onClick={() => handleSortOptionChange("cabinBag")}>
          cabin bag volume
        </button>
        <hr />
      </div>
      <AirlineList sortedAirlines={sortedAirlines} unitSystem={unitSystem} />
    </div>
  );
}
