import styled from "styled-components";
import { HerosAPITwo } from "../../pages/SearchScreen";
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

export const HeroCardTwo = ({
  name,
  image: { url },
  id,
  biography,
  work,
}: HerosAPITwo) => {
  return (
    <Card>
      <ImageContainer>
        <Name>{name}</Name>
        <Image src={url} alt={`img of ${name}`} />
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
          <Span>
            {biography["full-name"].length > 0
              ? biography["full-name"]
              : "Unknown Name"}
          </Span>
        </ParaGraft>
        <ParaGraft>First Appearance:</ParaGraft>
        <span>{biography["first-appearance"]}</span>
        <ParaGraft>occupation</ParaGraft>
        <span>{work.occupation}</span>
      </InfoContainer>
    </Card>
  );
};
