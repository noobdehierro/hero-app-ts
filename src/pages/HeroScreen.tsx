import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getHeroById, Hero } from "../helpers/fetch";
import { HeroXlCard } from "../components/hero/HeroXlCard";
// const baseUrl = process.env.REACT_APP_API_URL;

export const HeroScreen = () => {
  const [heroInfo, setHeroInfo] = useState<Hero>();
  const { heroId } = useParams();
  const navigate = useNavigate();

  // let heroInfo = useRef();
  useEffect(() => {
    const getData = async () => {
      const data = await getHeroById(heroId);
      setHeroInfo(data);
      if (!data) {
        navigate("/");
      }
    };
    getData();
  }, [heroId, navigate]);


  return <div>{heroInfo && <HeroXlCard {...heroInfo} />}</div>;
};
