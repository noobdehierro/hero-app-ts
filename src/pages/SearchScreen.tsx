import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { HeroCardTwo } from "../components/hero/HeroCardTwo";
import { getHeroByName } from "../helpers/fetch";

export interface HerosAPITwo {
  response: string;
  id: string;
  name: string;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  work: Work;
  connections: Connections;
  image: Image;
}

export interface Appearance {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  "eye-color": string;
  "hair-color": string;
}

export interface Biography {
  "full-name": string;
  "alter-egos": string;
  aliases: string[];
  "place-of-birth": string;
  "first-appearance": string;
  publisher: string;
  alignment: string;
}

export interface Connections {
  "group-affiliation": string;
  relatives: string;
}

export interface Image {
  url: string;
}

export interface Powerstats {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
}

export interface Work {
  occupation: string;
  base: string;
}

const Container = styled.div`
  display: flex;
`;

const FormContainer = styled.form`
  width: 45%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Results = styled.div`
  width: 45%;
  text-align: center;
`;

export const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const [heros, setHeros] = useState<HerosAPITwo[]>();

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmitSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search.trim() === "") return;

    const data = await getHeroByName(search);

    setHeros(data.results);
  };

  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />
      <Container>
        <FormContainer onSubmit={(e) => handleSubmitSearch(e)}>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            value={search}
            name="search"
            id="search"
            onChange={(e) => handleChangeSearch(e)}
          />
          <button type="submit">Search</button>
        </FormContainer>
        <Results>
          resultados
          <div>
            {heros && heros.map((hero) => <HeroCardTwo key={hero.id} {...hero}/>)}
            </div>
        </Results>
      </Container>
    </div>
  );
};
