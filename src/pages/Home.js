import React, { useEffect, Fragment } from 'react';
//Redux
import { loadGames, updatePopularNumber, updateNewNumber, updateUpcomingNumber, updateSearchNumber, loadNewGames, loadPopularGames, loadSearchGames, loadUpcomingGames } from '../actions/gamesAction';
import { useDispatch, useSelector } from 'react-redux';
//Components
import Game from '../components/Game';
import GameDetail from '../components/GameDeatil';
//Styling and Animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { fadeIn } from '../animations';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  //Get current location
  const pathId = useLocation().pathname.split('/')[2];
  //Fetch Games
  const dispatch = useDispatch();
  //Get data back
  const { popular, newGames, upcoming, searched, popularNumberOfGames, newNumberOfGames, upcomingNumberOfGames, searchedNumberOfGames, searchName } = useSelector(state => state.games);
  useEffect(() => {
    dispatch(loadGames());
  }, []);

  const loadmoreUpcoming = () => {
    dispatch(updateUpcomingNumber());
    dispatch(loadUpcomingGames(upcomingNumberOfGames + 10));
  }
  const loadmorePopular = () => {
    dispatch(updatePopularNumber());
    dispatch(loadPopularGames(popularNumberOfGames + 10));
  }
  const loadmoreNew = () => {
    dispatch(updateNewNumber());
    dispatch(loadNewGames(newNumberOfGames + 10));
  }
  const loadmoreSearch = () => {
    dispatch(updateSearchNumber());
    dispatch(loadSearchGames(searchName, searchedNumberOfGames + 10));
  }

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimatePresence>
        {pathId && <GameDetail pathId={pathId} />}
      </AnimatePresence>
      {searched && searched.length > 0 ? (
        <div className="searched">
          <Games>
            {searched.map(game =>
              <Game
                key={game.id}
                id={game.id}
                title={game.name}
                release={game.released}
                image={game.background_image}
              />
            )}
          </Games>
          <MoreButton>
            <button onClick={() => loadmoreSearch()}>Load More</button>
          </MoreButton>
        </div>
      ) : (
        <Fragment>
          <h2>Upcoming Games</h2>
          <Games>
            {upcoming.map(game =>
              <Game
                key={game.id}
                id={game.id}
                title={game.name}
                release={game.released}
                image={game.background_image}
              />
            )}
          </Games>
          <MoreButton>
            <button onClick={() => loadmoreUpcoming()}>Load More</button>
          </MoreButton>
          <h2>Popular Games</h2>
          <Games>
            {popular.map(game => 
              <Game
                key={game.id}
                id={game.id}
                title={game.name}
                release={game.released}
                image={game.background_image}
              />
            )}
          </Games>
          <MoreButton>
            <button onClick={() => loadmorePopular()}>Load More</button>
          </MoreButton>
          <h2>New Games</h2>
          <Games>
            {newGames.map(game => 
              <Game
                key={game.id}
                id={game.id}
                title={game.name}
                release={game.released}
                image={game.background_image}
              />
            )}
          </Games>
          <MoreButton>
            <button onClick={() => loadmoreNew()}>Load More</button>
          </MoreButton>
        </Fragment>
      )}
    </GameList>
  )
}

const GameList = styled(motion.div)`
  padding: 0 5rem 5rem;
  h2 {
    padding: 5rem 0;
  }
`;

const MoreButton = styled(motion.div)`
  text-align: center;
  width: 100%;
  padding: 2rem 0;
  button {
    width: 20vw;
    height: 7vh;
    font-size: 1.5rem;
    background-color: #ff7676;
    color: white;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all .45s;
    &:hover {
      color: black;
      background: #ffabab;
    }
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;