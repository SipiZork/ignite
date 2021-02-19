import React, { Fragment } from 'react';
import { smallImage } from '../util';
//Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Redux
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//Images
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetail = ({ pathId }) => {
  const icons = [];
  const history = useHistory();
  //Data
  const { game, screenshots, isLoading } = useSelector(state => state.detail);
  //Exit detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      exitDetail();
    }
  };
  const exitDetail = () => {
    document.body.style.overflow = 'auto';
    history.push('/');
  }
  //Get Starts
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={starFull} alt="star-full" />);
      } else {
        stars.push(<img key={i} src={starEmpty} alt="star-empty" />);
      }
    }
    return stars;
  }

  // Get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case 'PlayStation 4':
      case 'PlayStation 5':
        return playstation;
      case 'Xbox One':
      case 'Xbox Series S/X':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendp Switch':
        return nintendo;
      case 'iOS':
        return apple;
      default:
        return gamepad;
    }
  }

  const getIcon = (platform) => {
    const icon = getPlatform(platform);
    if (icons.includes(icon)) {
      return null;
    } else {
      icons.push(icon);
      return icon;
    }
  }

  return (
    <Fragment>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <DetailBox layoutId={pathId} className="detailbox">
            <Detail>
              <Close onClick={exitDetail}>
                X
              </Close>
              <Stats>
                <div className="rating">
                  <motion.h3 layoutId={`title${pathId}`}>{game.name}</motion.h3>
                  <p>Rating: {game.rating}</p>
                  {getStars()}
                </div>
                <Info>
                  <h3>Platforms</h3>
                  <Platforms>
                    {game.platforms.map(data => {
                      console.log(data);
                      getIcon(data.platform.name);
                    })}
                    {icons.map(icon => <img src={icon} alt={icon} key={icon} />)}
                  </Platforms>
                </Info>
              </Stats>
              <Media>
                {game.background_image !== null && (
                  <motion.img layoutId={`image${pathId}`} src={smallImage(game.background_image, 1280)} alt={game.background_image} />
                )}
              </Media>
              <Description>
                <p>{game.description_raw}</p>
              </Description>
              <div className="gallery">
                {screenshots.results.map(screen => 
                  <img src={smallImage(screen.image, 1280)} key={screen.id} alt={screen.image} /> 
                )}
              </div>
            </Detail>
          </DetailBox>
        </CardShadow>
      )}
    </Fragment>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 5;
`;

const Close = styled(motion.div)`
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  right: 2rem;
  font-weight: bolder;
  transition: all .3s;
  &:hover {
    transform: scale(1.3);
  }
`;

const DetailBox = styled(motion.div)`
  width: 80%;
  height: 80%;
  border-radius: .5rem;
  padding: .25rem .025rem;
  background: white;
  position: absolute;
  z-index: 10;
  left: 10%;
  color: black;
`;

const Detail = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 0rem 2rem;

&&::-webkit-scrollbar {
  width: .5rem;
  border-radius: 1rem;
  
}
&&::-webkit-scrollbar-thumb {
  background-color: #ff7676;
  border-radius: 1rem;
}
&&::-webkit-scrollbar-track {
  background: white;
  border-radius: 1rem;
}

img {
  width: 100%;
}
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 1.5rem;
    height: 1.5rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
    width: 3rem;
    height: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 2rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
    object-position: 0% 0%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
`;

export default GameDetail;