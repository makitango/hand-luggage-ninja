import GlobalStyle from "../styles";
import { bags } from "../lib/data";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [sortedBags, setSortedBags] = useState(bags);

  function handleSortBagsAlphabetical() {
    setSortedBags(bags);
  }

  function handleSortBagsPersonalItem() {
    const sortedBags = bags
      .map(({ slug, personalItem, cabinBag }) => {
        const personalItemVolume = (
          (personalItem.metric.length *
            personalItem.metric.width *
            personalItem.metric.height) /
          1000
        ).toFixed(1);

        return {
          slug,
          personalItem,
          cabinBag,
          personalItemVolume: parseFloat(personalItemVolume),
        };
      })
      .sort((a, b) => b.personalItemVolume - a.personalItemVolume);
    setSortedBags(sortedBags);
  }

  function handleSortBagsCabinBag() {
    const sortedBags = bags
      .map(({ slug, personalItem, cabinBag }) => {
        const cabinBagVolume = (
          (cabinBag.metric.length *
            cabinBag.metric.width *
            cabinBag.metric.height) /
          1000
        ).toFixed(1);

        return {
          slug,
          personalItem,
          cabinBag,
          cabinBagVolume: parseFloat(cabinBagVolume),
        };
      })
      .sort((a, b) => b.cabinBagVolume - a.cabinBagVolume);
    setSortedBags(sortedBags);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        bags={sortedBags}
        onSortBagsAlphabetical={handleSortBagsAlphabetical}
        onSortBagsPersonalItem={handleSortBagsPersonalItem}
        onSortBagsCabinBag={handleSortBagsCabinBag}
      />
    </>
  );
}
