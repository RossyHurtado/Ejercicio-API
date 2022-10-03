import { Character } from "../../tipos";

export const getCharacters = async (): Promise<Array<Character>> => {
     const response = await fetch("https://rickandmortyapi.com/api/character/60,72,90,125,230");
     const data = await response.json();
     console.log(data);
     return data;

};

