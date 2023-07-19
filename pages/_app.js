import GlobalStyle from "../styles";
import { airlines as initialAirlines } from "../lib/data";
import { useState } from "react";
import { calculateVolume } from "@/utils";

export default function App({ Component, pageProps }) {
  const [unitSystem, setUnitSystem] = useState("metric");
  const [airlines, setAirlines] = useState(initialAirlines);
  const [bags, setBags] = useState({});

  function handleUnitSystemChange(option) {
    setUnitSystem(option);
  }
  function handleSortOptionChange(option) {
    const sortedAirlines = [...airlines];
    if (option === "alphabetical") {
      sortedAirlines.sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "personalItem") {
      sortedAirlines.sort((b, a) => {
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
      sortedAirlines.sort((b, a) => {
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
      sortedAirlines.sort((b, a) => {
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

    setAirlines(sortedAirlines);
  }
  function handleFormSubmit(type, dimensions) {
    setBags((prevBags) => ({
      ...prevBags,
      [type]: {
        ...prevBags[type],
        ...dimensions,
      },
    }));
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        airlines={airlines}
        handleSortOptionChange={handleSortOptionChange}
        handleUnitSystemChange={handleUnitSystemChange}
        unitSystem={unitSystem}
        bags={bags}
        handleFormSubmit={handleFormSubmit}
      />
    </>
  );
}
