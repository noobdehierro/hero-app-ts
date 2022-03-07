import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Hero } from "../../helpers/fetch";

const Card = styled.div`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(0, 0, 0);
  width: 60%;
  background-color: #333333;
  color: #ffffffff;
  border-radius: 20px;
  box-shadow: 4px 6px 7px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 4px 6px 7px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 6px 7px -1px rgba(0, 0, 0, 0.75);
`;

const Data = styled.div`
  display: flex;
`;

const ImgContainer = styled.div`
  width: 96%;
  max-width: 960px;
  margin: 0 10px;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 4px 6px 7px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 4px 6px 7px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 6px 7px -1px rgba(0, 0, 0, 0.75);
`;

const Column = styled.div`
  margin: 0 10px;
`;

const DataConnections = styled.div`
  /* background-color: yellow; */
  width: 100%;
  margin: 0 10px;
`;

const TitleThree = styled.h3`
  font-size: x-large;
`;

const ButonBack = styled.button`
  background-color: #04aa6d; /* Green */
  border: 2px solid #04aa6d;
  color: white;
  padding: 10px 22px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  width: 100%;
  border-radius: 10px;
  transition: 0.5s;
  margin: 20px 0;

  :hover {
    background-color: transparent;
    cursor: pointer;
  }
`;
export const HeroXlCard = ({
  name,
  images: { lg },
  id,
  biography: {
    fullName,
    firstAppearance,
    aliases,
    alignment,
    alterEgos,
    placeOfBirth,
  },
  work: { occupation, base },
  powerstats: { combat, durability, intelligence, power, speed, strength },
  appearance: { gender, race, height, eyeColor, hairColor },
  connections: { groupAffiliation, relatives },
}: Hero) => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };
  return (
    <Card>
      <h2>#{id}</h2>
      <TitleThree>Name: {name}</TitleThree>
      <Data>
        <ImgContainer>
          <Img src={lg} alt={name} />
        </ImgContainer>
        <div>
          <Data>
            <Column>
              <TitleThree>appearance</TitleThree>
              <p>
                gender: <span>{gender}</span>
              </p>
              <p>
                race: <span>{race}</span>
              </p>
              <p>
                height: <span>{height}</span>
              </p>
              <p>
                eyeColor: <span>{eyeColor}</span>
              </p>
              <p>
                hairColor: <span>{hairColor}</span>
              </p>
              <TitleThree>powerstats</TitleThree>
              <p>
                combat: <span>{combat}</span>
              </p>
              <p>
                durability: <span>{durability}</span>
              </p>
              <p>
                intelligence: <span>{intelligence}</span>
              </p>
              <p>
                power: <span>{power}</span>
              </p>
              <p>
                speed: <span>{speed}</span>
              </p>
              <p>
                strength: <span>{strength}</span>
              </p>
            </Column>
            <Column>
              <TitleThree>Work</TitleThree>
              <p>
                occupation: <span>{occupation}</span>
              </p>
              <p>
                base: <span>{base}</span>
              </p>
              <TitleThree>biography</TitleThree>
              <p>
                fullName: <span>{fullName}</span>
              </p>
              <p>
                firstAppearance: <span>{firstAppearance}</span>
              </p>
              <p>
                aliases: <span>{aliases.join(", ")}</span>
              </p>
              <p>
                alignment: <span>{alignment}</span>
              </p>
              <p>
                alterEgos: <span>{alterEgos}</span>
              </p>
              <p>
                placeOfBirth: <span>{placeOfBirth}</span>
              </p>
            </Column>
          </Data>
          <DataConnections>
            <TitleThree>connections</TitleThree>
            <p>
              groupAffiliation: <span>{groupAffiliation}</span>
            </p>
            <p>
              relatives: <span>{relatives}</span>
            </p>
          </DataConnections>
          <ButonBack onClick={handleReturn}>regresar</ButonBack>
        </div>
      </Data>
    </Card>
  );
};
