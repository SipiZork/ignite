//Base URL
const base_url = 'https://api.rawg.io/api/';

//Gettimg the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
}

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games
const popular_games = (number) => { return `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=${number}`; }
const upcoming_games = (number) => { return `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=${number}`; }
const new_games = (number) => { return `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=${number}`; }

export const popularGamesURL = (number = 10) => `${base_url}${popular_games(number)}`;
export const upcomingGamesURL = (number = 10) => `${base_url}${upcoming_games(number)}`;
export const newGamesURL = (number = 10) => `${base_url}${new_games(number)}`;

//GAME DEATILS
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;
//GAME SCREENSHOTS
export const gameScreenshotsURL = (game_id) => `${base_url}games/${game_id}/screenshots`;
//SEARCHED GAME
export const searchGameURL = (game_name, number) => `${base_url}games?search=${game_name}&page_size=${number}`;