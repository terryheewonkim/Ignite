const initState = {
  popular: [],
  newGames: [],
  upcomingGames: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        upcomingGames: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
