import axios from 'axios';
import { gameDetailsURL, gameScreenshotsURL } from '../api';

export const loadDetail = (gameId) => async dispatch => {
  dispatch({
    type: 'LOADING_DETAIL'
  })
  //FETCH AXIOS
  const detailData = await axios.get(gameDetailsURL(gameId));
  const screenshotsData = await axios.get(gameScreenshotsURL(gameId));
  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screenshots: screenshotsData.data
    }
  })
};