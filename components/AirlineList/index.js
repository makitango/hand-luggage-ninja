import { airlines, calculateVolume, convertDimension } from "@/utils";
import styled from "styled-components";

export default function AirlineList({ airlines, unitSystem }) {
  // Calculate the average dimensions and volume for personal items and cabin bags
  const averageDimensionsAndVolume = airlines.reduce(
    (acc, airline) => {
      acc.totalPersonalItem.length += airline.personalItem.length;
      acc.totalPersonalItem.width += airline.personalItem.width;
      acc.totalPersonalItem.height += airline.personalItem.height;
      acc.totalCabinBag.length += airline.cabinBag.length;
      acc.totalCabinBag.width += airline.cabinBag.width;
      acc.totalCabinBag.height += airline.cabinBag.height;
      acc.totalPersonalItemVolume += calculateVolume(airline.personalItem);
      acc.totalCabinBagVolume += calculateVolume(airline.cabinBag);
      return acc;
    },
    {
      totalPersonalItem: { length: 0, width: 0, height: 0 },
      totalCabinBag: { length: 0, width: 0, height: 0 },
      totalPersonalItemVolume: 0,
      totalCabinBagVolume: 0,
    }
  );

  const airlinesCount = airlines.length;
  const averagePersonalItem = {
    length: averageDimensionsAndVolume.totalPersonalItem.length / airlinesCount,
    width: averageDimensionsAndVolume.totalPersonalItem.width / airlinesCount,
    height: averageDimensionsAndVolume.totalPersonalItem.height / airlinesCount,
  };
  const averageCabinBag = {
    length: averageDimensionsAndVolume.totalCabinBag.length / airlinesCount,
    width: averageDimensionsAndVolume.totalCabinBag.width / airlinesCount,
    height: averageDimensionsAndVolume.totalCabinBag.height / airlinesCount,
  };
  const averagePersonalItemVolume =
    averageDimensionsAndVolume.totalPersonalItemVolume / airlinesCount;
  const averageCabinBagVolume =
    averageDimensionsAndVolume.totalCabinBagVolume / airlinesCount;

  // Function to get the color based on the percentage difference between the value and the average
  function getColor(value, averageValue) {
    const percentageDiff = (value - averageValue) / averageValue;
    if (percentageDiff < -0.2) {
      return "red"; // Inverted: values below the average are red
    } else if (percentageDiff > 0.2) {
      return "green"; // Inverted: values above the average are green
    } else {
      return "inherit";
    }
  }

  return (
    <CardContainer>
      {airlines.map(({ id, name, personalItem, cabinBag, freeCabinBag }) => {
        // Calculate the dimensions and volume of the current airline's bags
        const personalItemVolume = calculateVolume(personalItem);
        const cabinBagVolume = calculateVolume(cabinBag);

        return (
          <Card key={id}>
            <Name>{name}</Name>
            <GridContainer>
              <Column1>Personal item</Column1>
              <Column2>
                {convertDimension(personalItem.length, unitSystem)}
                {" x "}
                {convertDimension(personalItem.width, unitSystem)}
                {" x "}
                <span
                  style={{
                    color: getColor(
                      personalItem.height,
                      averagePersonalItem.height
                    ),
                  }}
                >
                  {convertDimension(personalItem.height, unitSystem)}
                  {unitSystem === "metric" ? " cm" : " in"}
                </span>
              </Column2>
              <Column3>{calculateVolume(personalItem)} l</Column3>
            </GridContainer>
            <GridContainer>
              <Column1 style={{ color: freeCabinBag ? "inherit" : "red" }}>
                Cabin bag
              </Column1>
              <Column2>
                {convertDimension(cabinBag.length, unitSystem)}
                {" x "}
                {convertDimension(cabinBag.width, unitSystem)}
                {" x "}
                <span
                  style={{
                    color: getColor(cabinBag.height, averageCabinBag.height),
                  }}
                >
                  {convertDimension(cabinBag.height, unitSystem)}
                  {unitSystem === "metric" ? " cm" : " in"}
                </span>
              </Column2>
              <Column3>{calculateVolume(cabinBag)} l</Column3>
            </GridContainer>
            <CombinedVolume>
              <CombinedVolumeLeft>Combined</CombinedVolumeLeft>
              <CombinedVolumeRight>
                {calculateVolume(personalItem) + calculateVolume(cabinBag)} l
              </CombinedVolumeRight>
            </CombinedVolume>
          </Card>
        );
      })}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Card = styled.div`
  padding: 20px;
  border: 1px solid #dddddd;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Name = styled.h2`
  text-align: left;
  margin-top: 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: center;
`;

const Column1 = styled.div`
  grid-column: 1;
  text-align: left;
  white-space: nowrap;
  line-height: 2;
  font-weight: bold;
`;

const Column2 = styled.div`
  grid-column: 2;
  text-align: right;
  white-space: nowrap;
  line-height: 2;
`;

const Column3 = styled.div`
  grid-column: 3;
  text-align: right;
  white-space: nowrap;
  line-height: 2;
  font-weight: bold;
`;

const CombinedVolume = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  text-align: left;
  line-height: 2;
`;

const CombinedVolumeLeft = styled.div`
  text-align: left;
  font-weight: bold;
`;

const CombinedVolumeRight = styled.div`
  text-align: right;
  font-weight: bold;
`;
