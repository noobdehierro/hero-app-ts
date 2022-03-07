import axios from 'axios';
const baseUrl = process.env.REACT_APP_API_URL;
const searchBaseUrl = process.env.REACT_APP_HERO_API_URL;
interface Happearance {
    eyeColor: string,
    gender: string,
    hairColor: string,
    height: string[],
    race: string,
    weight: string[],
}
interface Hbiography {
    aliases: string[],
    alignment: string,
    alterEgos: string,
    firstAppearance: string,
    fullName: string,
    placeOfBirth: string,
    publisher: string,
}
interface Hconnections {
    groupAffiliation: string,
    relatives: string,
}
interface Himages {
    lg: string,
    md: string,
    sm: string,
    xs: string,
}
interface Hpowerstats {
    combat: number,
    durability: number,
    intelligence: number,
    power: number,
    speed: number,
    strength: number,
}
interface Hwork {
    base: string,
    occupation: string,
}

export interface Hero {
    appearance: Happearance,
    biography: Hbiography,
    connections: Hconnections,
    id: number,
    images: Himages,
    name: string,
    powerstats: Hpowerstats,
    slug: string,
    work: Hwork
}


const getHeroByPublisher = async (publisher: string) => {
    const res = await fetch(`${baseUrl}/all.json`)
    const heros: [Hero] = await res.json()

    const filter = heros.filter((hero: Hero) => hero.biography.publisher === publisher)
    return filter;

}

const getHeroById = async (id: any) => {
    try {
        const response = await axios.get(`${baseUrl}/id/${id}.json`);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

const getHeroByName = async (name: string) => {
    try {
        const response = await axios.get(`${searchBaseUrl}/${name}`);
        return response.data
    } catch (error) {
        console.error(error);
    }

}

export {
    getHeroByPublisher, getHeroById, getHeroByName
}
