import { airlines } from "@/lib/data";
import { convertDimensionsToInches } from "@/utils";
import GlobalStyle from "@/styles";
import AirlineList from "@/components/AirlineList";
import { useState } from "react";

export default function App({ Component, pageProps }) {
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

  const metricVolumes = airlines.reduce((volumes, airline) => {
    volumes[airline.id] = {
      personalItemVolume: calculateVolume(airline.personalItem),
      cabinBagVolume: calculateVolume(airline.cabinBag),
    };
    return volumes;
  }, {});

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

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        metricSystem={metricSystem}
        setMetricSystem={setMetricSystem}
        sortedAirlines={sortedAirlines}
        setSorting={setSorting}
        calculateVolume={calculateVolume}
        metricVolumes={metricVolumes}
      />
    </>
  );
}
