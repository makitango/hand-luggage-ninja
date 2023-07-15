import AirlineList from "@/components/AirlineList";
import { useState } from "react";
import { convertDimensionsToInches } from "@/utils";
import { airlines } from "@/lib/data";
import GlobalStyle from "@/styles";

export default function HomePage() {
  const [metricSystem, setMetricSystem] = useState(true);
  const [sorting, setSorting] = useState("alphabetical");

  const correctSystemAirlines = metricSystem
    ? airlines
    : airlines.map((airline) => ({
        ...airline,
        personalItem: convertDimensionsToInches(airline.personalItem),
        cabinBag: convertDimensionsToInches(airline.cabinBag),
      }));

  const calculateVolume = (dimensions) => {
    const { length, width, height } = dimensions;
    const volume = Math.round((length * width * height) / 1000);
    return volume;
  };

  const sortedAirlines = correctSystemAirlines
    .slice()
    .sort((a, b) =>
      sorting === "alphabetical"
        ? a.name.localeCompare(b.name)
        : sorting === "personalItem"
        ? calculateVolume(b.personalItem) - calculateVolume(a.personalItem)
        : sorting === "cabinBag"
        ? calculateVolume(b.cabinBag) - calculateVolume(a.cabinBag)
        : 0
    );

  const metricVolumes = airlines.reduce((volumes, airline) => {
    volumes[airline.key] = {
      personalItemVolume: calculateVolume(airline.personalItem),
      cabinBagVolume: calculateVolume(airline.cabinBag),
    };
    return volumes;
  }, {});

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
          metricVolumes[airline.key];

        return (
          <AirlineList
            key={airline.key}
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
