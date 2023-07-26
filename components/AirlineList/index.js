import { calculateVolume, convertDimension, getColor } from "@/utils";
import styled from "styled-components";

export default function AirlineList({ airlines, unitSystem }) {
  const airlinesCount = airlines.length;
  const averageDimensionsAndVolume = airlines.reduce(
    (acc, airline) => {
      ["length", "width", "height"].forEach((dim) => {
        acc.totalPersonalItem[dim] += airline.personalItem[dim];
        acc.totalCabinBag[dim] += airline.cabinBag[dim];
      });
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

  const averagePersonalItem = Object.entries(
    averageDimensionsAndVolume.totalPersonalItem
  ).reduce((acc, [dim, value]) => {
    acc[dim] = value / airlinesCount;
    return acc;
  }, {});

  const averagePersonalItemVolume =
    averageDimensionsAndVolume.totalPersonalItemVolume / airlinesCount;

  const averageCabinBag = Object.entries(
    averageDimensionsAndVolume.totalCabinBag
  ).reduce((acc, [dim, value]) => {
    acc[dim] = value / airlinesCount;
    return acc;
  }, {});

  const averageCabinBagVolume =
    averageDimensionsAndVolume.totalCabinBagVolume / airlinesCount;

  const averageCombinedVolumeValue =
    averagePersonalItemVolume + averageCabinBagVolume;

  return (
    <CardContainer>
      {airlines.map(({ id, name, personalItem, cabinBag, freeCabinBag }) => {
        const personalItemVolume = calculateVolume(personalItem);
        const cabinBagVolume = calculateVolume(cabinBag);
        const combinedVolumeValue = personalItemVolume + cabinBagVolume;

        return (
          <Card key={id}>
            <Name>{name}</Name>
            <GridContainer>
              <Column1>Personal item</Column1>
              <Column2>
                <span
                  style={{
                    color: getColor(
                      personalItem.length,
                      averagePersonalItem.length
                    ),
                  }}
                >
                  {convertDimension(personalItem.length, unitSystem)}
                </span>
                {" x "}
                <span
                  style={{
                    color: getColor(
                      personalItem.width,
                      averagePersonalItem.width
                    ),
                  }}
                >
                  {convertDimension(personalItem.width, unitSystem)}
                </span>
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
                </span>{" "}
                {unitSystem === "metric" ? " cm" : " in"}
              </Column2>
              <Column3
                style={{
                  color: getColor(
                    personalItemVolume,
                    averagePersonalItemVolume
                  ),
                }}
              >
                {personalItemVolume} l
              </Column3>
            </GridContainer>
            <GridContainer>
              <Column1 style={{ color: freeCabinBag ? "inherit" : "red" }}>
                Cabin bag
              </Column1>
              <Column2>
                <span
                  style={{
                    color: getColor(cabinBag.length, averageCabinBag.length),
                  }}
                >
                  {convertDimension(cabinBag.length, unitSystem)}
                </span>
                {" x "}
                <span
                  style={{
                    color: getColor(cabinBag.width, averageCabinBag.width),
                  }}
                >
                  {convertDimension(cabinBag.width, unitSystem)}
                </span>
                {" x "}
                <span
                  style={{
                    color: getColor(cabinBag.height, averageCabinBag.height),
                  }}
                >
                  {convertDimension(cabinBag.height, unitSystem)}
                </span>{" "}
                {unitSystem === "metric" ? " cm" : " in"}
              </Column2>
              <Column3
                style={{
                  color: getColor(cabinBagVolume, averageCabinBagVolume),
                }}
              >
                {cabinBagVolume} l
              </Column3>
            </GridContainer>
            <CombinedVolume>
              <CombinedVolumeLeft>Combined</CombinedVolumeLeft>
              <CombinedVolumeRight
                volumeValue={combinedVolumeValue}
                averageValue={averageCombinedVolumeValue}
              >
                <span>{combinedVolumeValue} l</span>
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
  max-width: 300px;
  border: 1px solid #dddddd;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Name = styled.h2`
  text-align: left;
  margin-top: 0;
  margin-bottom: 2px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 30% auto;
  gap: 10px;
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
  color: ${(props) => getColor(props.volumeValue, props.averageValue)};
`;
