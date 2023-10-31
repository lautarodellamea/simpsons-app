import { useReducer } from "react";
import { useFetch } from "./useFetch";
import { simpsonsReducer } from "../reducers/simpsonsReducer";

const init = () => {
  const initialSimpsonState = {
    page: 1,
    character: 1,
    pick: false,
    hasWon: null,
    count: 0,
    difficulty: "Fácil",
    isHard: false,
    characterVisible: true,
  };
  return initialSimpsonState;
};

export const useSimpsons = () => {

  const [state, dispatch] = useReducer(simpsonsReducer, [], init);
  const {
    page,
    character,
    hasWon,
    pick,
    count,
    difficulty,
    isHard,
    characterVisible,
  } = state;

  let url = `https://apisimpsons.fly.dev/api/personajes?page=${page}`;
  const { data, loading, error } = useFetch(url);

  
  function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
  }

  const getRandomCharacter = (limit) => {
    let randomCharacter = getRandomNumber(limit);
    return randomCharacter;
  };
  
  const randomPage = () => {
    let randomPage = getRandomNumber(127);
    let randomCharacter = getRandomCharacter(4);

    const action = {
      type: "PLAY_AGAIN",
      payload: { data, randomPage, randomCharacter },
    };
    dispatch(action);
  };

  const selectOption = (e) => {
    let currentOption = e.target.id;
    let currentCharacter = data.docs[character].Nombre;

    const action = {
      type: "SELECT_OPTION",
      payload: { currentOption, currentCharacter },
    };

    dispatch(action);
  };

  const changeDifficulty = () => {
    const action = {
      type: "CHANGE_DIFFICULTY",
    };
    dispatch(action);
  };
  


  
  return {
    page,
    character,
    hasWon,
    pick,
    count,
    difficulty,
    isHard,
    characterVisible,
    getRandomNumber,
    getRandomCharacter,
    data,
    loading,
    error,
    state,
    randomPage,
    selectOption,
    changeDifficulty
  }
}
