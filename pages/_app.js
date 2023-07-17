import GlobalStyle from "../styles";
import { airlines } from "../lib/data";
import { useState } from "react";
import { calculateVolume } from "@/utils";

export default function App({ Component, pageProps }) {
  const [unitSystem, setUnitSystem] = useState("metric");
  const [sortedAirlines, setSortedAirlines] = useState(airlines);

  function handleUnitSystemChange(option) {
    if (option === "metric") {
      setUnitSystem("metric");
    } else if (option === "imperial") {
      setUnitSystem("imperial");
    }
  }

  function handleSortOptionChange(option) {
    const sortedList = [...sortedAirlines];

    if (option === "alphabetical") {
      sortedList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "personalItem") {
      sortedList.sort((b, a) => {
        const volumeDifference =
          calculateVolume(a.personalItem) - calculateVolume(b.personalItem);

        if (volumeDifference === 0) {
          if (a.freeCabinBag && !b.freeCabinBag) {
            return 1;
          } else if (!a.freeCabinBag && b.freeCabinBag) {
            return -1;
          }
        }

        return volumeDifference;
      });
    } else if (option === "cabinBag") {
      sortedList.sort((b, a) => {
        const volumeDifference =
          calculateVolume(a.cabinBag) - calculateVolume(b.cabinBag);

        if (volumeDifference === 0) {
          if (a.freeCabinBag && !b.freeCabinBag) {
            return 1;
          } else if (!a.freeCabinBag && b.freeCabinBag) {
            return -1;
          }
        }

        return volumeDifference;
      });
    } else if (option === "combined") {
      sortedList.sort((b, a) => {
        const totalVolumeA =
          calculateVolume(a.personalItem) + calculateVolume(a.cabinBag);
        const totalVolumeB =
          calculateVolume(b.personalItem) + calculateVolume(b.cabinBag);

        if (totalVolumeA === totalVolumeB) {
          if (a.freeCabinBag && !b.freeCabinBag) {
            return 1;
          } else if (!a.freeCabinBag && b.freeCabinBag) {
            return -1;
          }
        }

        return totalVolumeA - totalVolumeB;
      });
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
        handleUnitSystemChange={handleUnitSystemChange}
        unitSystem={unitSystem}
      />
    </>
  );
}
