import { calculateVolume, convertDimension } from "@/utils";
import styled from "styled-components";

export default function AirlineList({ airlines, unitSystem, bags }) {
  return (
    <CardContainer>
      {airlines.map(({ id, name, personalItem, cabinBag, freeCabinBag }) => (
        <Card key={id}>
          <Name>{name}</Name>
          <GridContainer>
            <Column1>Personal item</Column1>
            <Column2>
              {convertDimension(personalItem.length, unitSystem)}
              {" x "}
              {convertDimension(personalItem.width, unitSystem)}
              {" x "}
              {convertDimension(personalItem.height, unitSystem)}
              {unitSystem === "metric" ? " cm" : " in"}
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
              {convertDimension(cabinBag.height, unitSystem)}
              {unitSystem === "metric" ? " cm" : " in"}
            </Column2>
            <Column3>{calculateVolume(cabinBag)} l</Column3>
          </GridContainer>
          <CombinedVolume>
            <CombinedVolumeLeft>Combined volume</CombinedVolumeLeft>
            <CombinedVolumeRight>
              {calculateVolume(personalItem) + calculateVolume(cabinBag)} l
            </CombinedVolumeRight>
          </CombinedVolume>
        </Card>
      ))}
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
