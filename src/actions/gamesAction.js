import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL, gameDetailsURL, searchGameURL } from '../api';

export const loadGames = (number) => async dispatch => {
  // FETCH AXIOS
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newData = await axios.get(newGamesURL());
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newData.data.results
    }
  });
};

export const loadUpcomingGames = (number) => async dispatch => {
  const upcomingData = await axios.get(upcomingGamesURL(number));
  dispatch({
    type: "FETCH_UPCOMING_GAMES",
    payload: {
      upcoming: upcomingData.data.results
    }
  })
}

export const loadNewGames = (number) => async dispatch => {
  const newData = await axios.get(newGamesURL(number));
  dispatch({
    type: "FETCH_NEW_GAMES",
    payload: {
      newGames: newData.data.results
    }
  })
}

export const loadPopularGames = (number) => async dispatch => {
  const popularData = await axios.get(popularGamesURL(number));
  dispatch({
    type: "FETCH_POPULAR_GAMES",
    payload: {
      popular: popularData.data.results
    }
  })
}

export const loadSearchGames = (searchName, number) => async dispatch => {
  const searchData = await axios.get(searchGameURL(searchName, number));
  dispatch({
    type: "FETCH_SEARCH_GAMES",
    payload: {
      searched: searchData.data.results
    }
  })
}

export const fetchSearch = (game_name, number) => async dispatch => {
  const searchGames = await axios.get(searchGameURL(game_name, number));
  dispatch({
    type: 'FETCH_SEARCHED',
    payload: {
      searched: searchGames.data.results
    }
  })
};

export const clearSearch = () => async dispatch => {
  dispatch({
    type: 'CLEAR_SEARCHED',
  })
};

export const updatePopularNumber = () => async dispatch => {
  dispatch({
    type: "UPDATE_POPULAR_NUMBER"
  })
};

export const updateNewNumber = () => async dispatch => {
  dispatch({
    type: "UPDATE_NEW_NUMBER"
  })
};

export const updateUpcomingNumber = () => async dispatch => {
  dispatch({
    type: "UPDATE_UPCOMING_NUMBER"
  })
};

export const updateSearchNumber = (text) => async dispatch => {
  dispatch({
    type: "UPDATE_SEARCH_NUMBER"
  });
};

export const updateSearchName = (text) => async dispatch => {
  dispatch({
    type: "UPDATE_SEARCH_NAME",
    payload: {
      searchName: text
    }
  });
};