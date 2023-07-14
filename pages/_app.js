import GlobalStyle from "../styles";
import { airlines } from "../lib/data";
import { useState } from "react";
import { convertDimensionsToInches } from "@/utils";

export default function App({ Component, pageProps }) {
  {
    const [metricSystem, setMetricSystem] = useState(true);
    const [sorting, setSorting] = useState("ascending");

    const correctSystemAirlines = metricSystem
      ? airlines
      : airlines.map((airline) => ({
          ...airline,
          personalItem: convertDimensionsToInches(airline.personalItem),
          cabinBag: convertDimensionsToInches(airline.cabinBag),
        }));

    const sortedAirlines = correctSystemAirlines
      .slice()
      .sort((a, b) =>
        sorting === "ascending"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );

    // const [unitSystem, setUnitSystem] = useState("metric");
    // const [sortedAirlines, setSortedAirlines] = useState(airlines);

    // function calculateVolume(dimensions) {
    //   const { length, width, height } = dimensions;
    //   const volume = length * width * height;
    //   return volume;
    // }

    // function handleUnitToggle() {
    //   setUnitSystem((prevUnitSystem) =>
    //     prevUnitSystem === "metric" ? "imperial" : "metric"
    //   );
    // }

    // function handleSortOptionChange(option) {
    //   const sortedList = [...sortedAirlines];

    //   if (sorting === "alphabetical") {
    //     sortedList.sort((a, b) => a.name.localeCompare(b.name));
    //   } else if (option === "personalItem") {
    //     sortedList.sort(
    //       (b, a) =>
    //         calculateVolume(a.personalItem) - calculateVolume(b.personalItem)
    //     );
    //   } else if (option === "cabinBag") {
    //     sortedList.sort(
    //       (b, a) => calculateVolume(a.cabinBag) - calculateVolume(b.cabinBag)
    //     );
    //   }

    //   setSortedAirlines(sortedList);
    // }

    return (
      <>
        <GlobalStyle />
        <Component
          {...pageProps}
          metricSystem={metricSystem}
          setMetricSystem={setMetricSystem}
          sortedAirlines={sortedAirlines}
          setSorting={setSorting}
        />
      </>
    );
  }
}
