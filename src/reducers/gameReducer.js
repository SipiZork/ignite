
const initialState = {
  popular: [],
  popularNumberOfGames: 10,
  newGames: [],
  newNumberOfGames: 10,
  upcoming: [],
  upcomingNumberOfGames: 10,
  searched: [],
  searchedNumberOfGames: 10,
  searchName: ''
}

const gameReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_GAMES":
      console.log(payload.popular);
      return {
        ...state,
        popular: payload.popular,
        upcoming: payload.upcoming,
        newGames: payload.newGames
      }
    case "UPDATE_SEARCH_NAME":
      return {
        ...state,
        searchName: payload.searchName
      }
    case "CLEAR_SEARCH_NAME": {
      return {
        ...state,
        searchName: ''
      }
    }
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: payload.searched
      }
    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
        searchName: ''
      }
    case "UPDATE_POPULAR_NUMBER":
      return {
        ...state,
        popularNumberOfGames: state.popularNumberOfGames + 10
      }
    case "UPDATE_NEW_NUMBER":
      return {
        ...state,
        newNumberOfGames: state.newNumberOfGames + 10
      }
    case "UPDATE_UPCOMING_NUMBER":
      return {
        ...state,
        upcomingNumberOfGames: state.upcomingNumberOfGames + 10
      }
    case "UPDATE_SEARCH_NUMBER":
      return {
        ...state,
        searchedNumberOfGames: state.searchedNumberOfGames + 10
      }
    case "FETCH_UPCOMING_GAMES":
      return {
        ...state,
        upcoming: payload.upcoming
      }
    case "FETCH_NEW_GAMES":
      return {
        ...state,
        newGames: payload.newGames
    }
    case "FETCH_POPULAR_GAMES":
      return {
        ...state,
        popular: payload.popular
    }
    case "FETCH_SEARCH_GAMES":
      return {
        ...state,
        searched: payload.searched
      }
    default:
      return {
        ...state
      };
  }
};

export default gameReducer;