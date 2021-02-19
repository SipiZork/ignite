import React from 'react';
import {smallImage} from '../util';
//Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
//Redux;
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import { Link } from 'react-router-dom';
import { useScroll } from './useScorll';

export const Game = ({ title, release, image, id }) => {
  const stringPathId = id.toString();
  const [element, controls] = useScroll();
  const dispatch = useDispatch();
  const loadDetailHandler = (gameId) => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(gameId));
  };
  return (
    <StyledGame ref={element} variants={fadeIn} animate={controls} initial="hidden" layoutId={stringPathId} onClick={() => loadDetailHandler(id)}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title${stringPathId}`}>{title}</motion.h3>
        <p>{release}</p>
        {image !== null && (
          <motion.img layoutId={`image${stringPathId}`} src={smallImage(image, 640)} alt={title} />
        )}
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0,0,0,.2);
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  transition: all .4s;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.1);
    background-color: #ff7676;
    box-shadow: 0px 20px 20px rgba(0,0,0,.4);
    h3,p {
      color: white;
    }
  }
`;

export default Game;