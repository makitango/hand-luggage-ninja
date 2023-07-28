import React, { useState } from "react";
import GlobalStyle from "../styles";
import { airlines as initialAirlines } from "../lib/data";
import { calculateVolume, convertDimension } from "@/utils";

export default function App({ Component, pageProps }) {
  const [unitSystem, setUnitSystem] = useState("metric");
  const [airlines, setAirlines] = useState(initialAirlines);
  const [bags, setBags] = useState({});
  const [activeSortOption, setActiveSortOption] = useState("alphabetical");

  function handleUnitSystemChange(option) {
    setUnitSystem(option);
  }

  function handleSortOptionChange(option) {
    setActiveSortOption(option);
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

  function handleFormSave(type, dimensions) {
    if (dimensions === null) {
      setBags((prevBags) => {
        const newBags = { ...prevBags };
        delete newBags[type];
        return newBags;
      });
    } else {
      const adjustedDimensions =
        unitSystem === "imperial"
          ? {
              length: convertDimension(dimensions.length * 2.54, "metric"),
              width: convertDimension(dimensions.width * 2.54, "metric"),
              height: convertDimension(dimensions.height * 2.54, "metric"),
            }
          : dimensions;

      setBags((prevBags) => ({
        ...prevBags,
        [type]: adjustedDimensions,
      }));
    }
  }

  function handleButtonClick(sortOption) {
    setActiveSortOption(sortOption);
    handleSortOptionChange(sortOption);
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
        handleFormSave={handleFormSave}
        activeSortOption={activeSortOption}
        handleButtonClick={handleButtonClick}
        personalItem={bags.personalItem} // Pass personalItem as a prop
        cabinBag={bags.cabinBag} // Pass cabinBag as a prop
      />
    </>
  );
}
