
const initialState = {
  popular: [],
  new: [],
  upcoming: [],
  searched: [],
}

const gameReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: payload.popular,
        upcoming: payload.upcoming,
        new: payload.new
      }
    default:
      return {
        ...state
      };
  }
};

export default gameReducer;