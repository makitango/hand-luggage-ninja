import GlobalStyle from "../styles";
import { airlines } from "../lib/data";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [unitSystem, setUnitSystem] = useState("metric");
  const [sortedAirlines, setSortedAirlines] = useState(airlines);

  function calculateVolume(dimensions) {
    const { length, width, height } = dimensions;
    const volume = length * width * height;
    return volume;
  }

  function handleUnitToggle() {
    setUnitSystem((prevUnitSystem) =>
      prevUnitSystem === "metric" ? "imperial" : "metric"
    );
  }

  function handleSortOptionChange(option) {
    const sortedList = [...sortedAirlines];

    if (option === "alphabetical") {
      sortedList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "personalItem") {
      sortedList.sort(
        (b, a) =>
          calculateVolume(a.personalItem) - calculateVolume(b.personalItem)
      );
    } else if (option === "cabinBag") {
      sortedList.sort(
        (b, a) => calculateVolume(a.cabinBag) - calculateVolume(b.cabinBag)
      );
    }

    setSortedAirlines(sortedList);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        sortedAirlines={sortedAirlines}
        handleSortOptionChange={handleSortOptionChange}
        handleUnitToggle={handleUnitToggle}
        unitSystem={unitSystem}
      />
    </>
  );
}
