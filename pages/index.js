import AirlineList from "@/components/AirlineList";

export default function HomePage({
  sortedAirlines,
  metricSystem,
  setMetricSystem,
  setSorting,
  calculateVolume,
}) {
  return (
    <>
      <button onClick={() => setMetricSystem(!metricSystem)}>
        switch unit system
      </button>

      <hr />

      <button onClick={() => setSorting("alphabetical")}>
        sort alphabetical
      </button>
      <button onClick={() => setSorting("personalItem")}>
        sort by personal item volume
      </button>
      <button onClick={() => setSorting("cabinBag")}>
        sort by cabin bag volume
      </button>

      <hr />

      {sortedAirlines.map((airline) => {
        return (
          <AirlineList
            key={airline.key}
            airline={airline}
            metricSystem={metricSystem}
            setSorting={setSorting}
            setMetricSystem={setMetricSystem}
            calculateVolume={calculateVolume}
          />
        );
      })}
    </>
  );
}
