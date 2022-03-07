import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getHeroByPublisher, Hero } from "../../helpers/fetch";
import { HeroCard } from "./HeroCard";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Title = styled.h1`
  text-align: center;
  margin: 10px;
  font-weight: 700;
  font-size: xx-large;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 25rem));
  justify-content: space-around;
  grid-row-gap: 4rem;
  margin-top: 2rem;
`;

export const HeroList = ({ publisher }: { publisher: string }) => {
  const [page, setPage] = React.useState(1);
  
  const [hero, sethero] = useState<Hero[]>();

const totalPaginas = useRef<number>();  
  useEffect(() => {
    const data = async () => {
      const res = await getHeroByPublisher(publisher);
      totalPaginas.current = Math.ceil(res.length / 10)
      sethero(res.slice(10,20));
    };
    data();
  }, [publisher]);
  console.log(totalPaginas);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <>
      <Title>{publisher}</Title>
      <hr />
      <Stack spacing={5}>
        <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChange} />
      </Stack>
      <Grid>
        {hero?.map((hero: Hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </Grid>
     
    </>
  );
};
