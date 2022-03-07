import { Link } from "react-router-dom";
import styled from "styled-components";
import { Hero } from "../../helpers/fetch";
const Card = styled.div`
  height: 300px;
  background-color: #333333;
  max-width: 450px;
  margin: 20px;
  border: 1px solid #000;
  border-radius: 20px;
  display: flex;
  box-shadow: 4px 6px 7px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 4px 6px 7px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 6px 7px -1px rgba(0, 0, 0, 0.75);
`;

const Image = styled.img`
  height: 80%;
  margin: 0 10px;
  border-radius: 20px;
  box-shadow: 4px 6px 7px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 4px 6px 7px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 6px 7px -1px rgba(0, 0, 0, 0.75);
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

const Name = styled.span`
  color: #ffffff;
  font-size: 16px;
  margin: 10px;
`;

const InfoContainer = styled.div`
  margin: auto;
  border-radius: 20px;
  height: 90%;
  width: 55%;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ParaGraft = styled.p`
  font-weight: 700;
`;

const Span = styled.span`
  font-weight: normal;
`;
const HeroButton = styled.button`
  background-color: transparent; /* Green */
  border: 2px solid #6a4caf;
  color: white;
  padding: 10px 22px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  width: 100%;
  border-radius: 10px;
  transition: 0.5s;
  margin: 5px;

  :hover {
    background-color: #6a4caf;
    cursor: pointer;
  }
`;

export const HeroCard = ({
  name,
  images: { md },
  id,
  biography: { fullName, firstAppearance },
  work: { occupation },
}: Hero) => {
  return (
    <Card>
      <ImageContainer>
        <Name>{name}</Name>
        <Image src={md} alt={`img of ${name}`} />
      </ImageContainer>
      <InfoContainer>
        <ParaGraft>
          Id: <Span>#{id}</Span>
        </ParaGraft>
        <ParaGraft>
          Name: <Span>{name}</Span>
        </ParaGraft>
        <ParaGraft>
          Real Name:{" "}
          <Span>{fullName.length > 0 ? fullName : "Unknown Name"}</Span>
        </ParaGraft>
        <ParaGraft>First Appearance:</ParaGraft>
        <span>{firstAppearance}</span>
        <ParaGraft>occupation</ParaGraft>
        <span>{occupation}</span>

        <Link to={`/hero/${id}`}>
          <HeroButton>More Info</HeroButton>
        </Link>
      </InfoContainer>
    </Card>
  );
};
