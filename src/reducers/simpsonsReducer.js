export const simpsonsReducer = (state, action) => {
  switch (action.type) {
    case "PLAY_AGAIN":
      return {
        ...state,
        page: action.payload.randomPage,
        character: action.payload.randomCharacter,
        pick: false,
        hasWon: null,
        characterVisible: state.isHard ? false : true
        
      };

    case "SELECT_OPTION":
      if (action.payload.currentOption == action.payload.currentCharacter) {
        return {
          ...state,
          count: state.count + 1,
          pick: true,
          hasWon: true,
          characterVisible: true
        };
      } else {
        return {
          ...state,
          count: state.count - 1,
          pick: true,
          hasWon: false,
          characterVisible: true
        };
      }

    case "CHANGE_DIFFICULTY":
      return {
        ...state,
        difficulty: state.difficulty === "Fácil" ? "Difícil" : "Fácil",
        isHard: !state.isHard,
        characterVisible: state.isHard ? true : false, 
      }

    default:
      return state;
  }
};
