import React,{ useState } from 'react';
//Styling and Animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';
import { fadeIn } from '../animations';
//Redux and Routes
import { fetchSearch, clearSearch, updateSearchName } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState('');

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  } 

  const submitSearch = (e) => {
    e.preventDefault();
    console.log(textInput === '');
    if (textInput === '') {
      dispatch(clearSearch());
    } else {
      dispatch(fetchSearch(textInput, 10));
      dispatch(updateSearchName(textInput));
      setTextInput('');
    }
    const input = document.querySelector('#search_text');
    input.blur();
  }

  return (
    <StyledNav >
      <Logo onClick={() => dispatch(clearSearch())}>
        <img src={logo} alt="logo"/>Ignite
      </Logo>
      <form className="search" onSubmit={submitSearch}>
        <input value={textInput} onChange={inputHandler} type="text" id="search_text" />
        <button type="submit">Search</button>
      </form>
    </StyledNav>
  )
}

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: .5rem;
    border: none;
    box-shadow: 0 0 30px rgba(0,0,0,.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: .5rem 2rem;
    cursor: pointer;
    background-color: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

export default Nav;