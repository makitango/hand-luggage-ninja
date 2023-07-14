import AirlineList from "@/components/AirlineList";

export default function HomePage({
  sortedAirlines,
  metricSystem,
  setMetricSystem,
  setSorting,
}) {
  return (
    <>
      <button onClick={() => setMetricSystem(!metricSystem)}>
        switch unit system
      </button>

      <hr />

      <button onClick={() => setSorting("ascending")}>sort ascending</button>
      <button onClick={() => setSorting("descending")}>sort descending</button>

      <hr />

      {sortedAirlines.map((airline) => {
        return (
          <AirlineList
            key={airline.key}
            airline={airline}
            metricSystem={metricSystem}
            setSorting={setSorting}
            setMetricSystem={setMetricSystem}
          />
        );
      })}
    </>
  );
}
