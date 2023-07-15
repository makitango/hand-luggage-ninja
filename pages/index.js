import GlobalStyle from "../styles";
import { useState } from "react";
import AirlineList from "@/components/AirlineList";
import { convertDimensionsToInches } from "@/utils";

export default function HomePage({
  metricSystem,
  sortedAirlines,
  setMetricSystem,
  setSorting,
  calculateVolume,
  metricVolumes,
}) {
  return (
    <>
      <GlobalStyle />
      <h1>Hand luggage ninja</h1>
      <strong>Select unit system </strong>
      <button onClick={() => setMetricSystem(true)}>Metric</button>
      <button onClick={() => setMetricSystem(false)}>Imperial</button>

      <hr />
      <strong>Sort </strong>

      <button onClick={() => setSorting("alphabetical")}>alphabetical</button>
      <button onClick={() => setSorting("personalItem")}>
        personal item volume
      </button>
      <button onClick={() => setSorting("cabinBag")}>cabin bag volume</button>

      <hr />

      {sortedAirlines.map((airline) => {
        const { personalItem, cabinBag } = airline;
        const { personalItemVolume, cabinBagVolume } =
          metricVolumes[airline.id];

        return (
          <AirlineList
            key={airline.id}
            airline={airline}
            metricSystem={metricSystem}
            personalItemVolume={personalItemVolume}
            cabinBagVolume={cabinBagVolume}
          />
        );
      })}
    </>
  );
}
