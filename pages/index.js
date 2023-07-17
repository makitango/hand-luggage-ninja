import AirlineList from "@/components/AirlineList";

export default function HomePage({
  handleSortOptionChange,
  airlines,
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
          Alphabetical
        </button>
        <button onClick={() => handleSortOptionChange("personalItem")}>
          Personal item volume
        </button>
        <button onClick={() => handleSortOptionChange("cabinBag")}>
          Cabin bag volume
        </button>
        <button onClick={() => handleSortOptionChange("combined")}>
          Combined volume
        </button>
        <hr />
      </div>
      <AirlineList airlines={airlines} unitSystem={unitSystem} />
    </div>
  );
}
