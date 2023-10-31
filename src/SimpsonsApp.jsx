import { useEffect } from "react";
import { useSimpsons } from "./hooks/useSimpsons";

import { Card } from "./components/Card";
import { Option } from "./components/Option";
import { WonComponent } from "./components/WonComponent";

import "./index.css";
import { Brand } from "./components/Brand";



export const SimpsonsApp = () => {

  const {
    character,
    hasWon,
    pick,
    count,
    difficulty,
    isHard,
    characterVisible,
    data,
    loading,
    error,
    state,
    randomPage,
    selectOption,
    changeDifficulty,
  } = useSimpsons();

  useEffect(() => {
    // console.log(state);
  }, [state]);

  return (
    <main className="main">
      <h1 className="title-app">Simpsons App</h1>
      <h2 className="subtitle-app">
        Adivina el <span>personaje</span>
      </h2>

      {error && <p className="error">Ocurrió un error en la carga de datos, comuníquese con el propietario de la aplicación, disculpe las molestias.</p>}

      {loading ? (
        <div>Cargando...</div>
      ) : (
        data && (
          <>
            <div className="cards-container">
              <Card
                data={data}
                character={character}
                hasWon={hasWon}
                pick={pick}
                difficulty={difficulty}
                isHard={isHard}
                characterVisible={characterVisible}
              />
              <div className="options">
                {data.docs.map((el) => (
                  <Option
                    key={el._id}
                    selectOption={selectOption}
                    el={el}
                    hasWon={hasWon}
                    pick={pick}
                  />
                ))}
              </div>
            </div>

            <p className="puntaje">
              Puntaje:{" "}
              <span style={{ color: count >= 0 ? "#00ff80" : "#ff0062" }}>
                {count}
              </span>
            </p>
            <div className="menu">
              <button className="button button-menu" onClick={randomPage}>
                Nuevo Juego
              </button>
              <button className="button button-menu" onClick={changeDifficulty}>
                Dificultad: {difficulty}
              </button>
            </div>

            
          </>
        )
      )}

      <WonComponent
        data={data}
        character={character}
        randomPage={randomPage}
        hasWon={hasWon}
      />
      <Brand/>
    </main>
  );
};
