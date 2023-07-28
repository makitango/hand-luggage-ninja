import AirlineList from "@/components/AirlineList";
import MyBags from "@/components/MyBags";
import Sort from "@/components/Sort";
import UnitSystem from "@/components/UnitSystem";
import { styled } from "styled-components";

export default function HomePage({
  airlines,
  unitSystem,
  handleUnitSystemChange,
  handleSortOptionChange,
  personalItem,
  cabinBag,
  handleFormSave,
}) {
  return (
    <div>
      <H1>Settings</H1>
      <UnitSystem handleUnitSystemChange={handleUnitSystemChange} />
      <Sort
        handleSortOptionChange={handleSortOptionChange}
        handleButtonClick={handleSortOptionChange}
      />
      <br />
      <hr />
      <H1>My bags</H1>
      <MyBags
        personalItem={personalItem}
        cabinBag={cabinBag}
        unitSystem={unitSystem}
        handleFormSave={handleFormSave}
      />
      <br />
      <hr />
      <H1>Airline list</H1>
      <AirlineList airlines={airlines} unitSystem={unitSystem} />
    </div>
  );
}

const H1 = styled.h1`
  text-align: center;
  margin: 16px 0;
`;
