import React from 'react';
import { Route } from 'react-router-dom';
//Components and Pages
import Home from './pages/Home';
import GlobalStyle from './components/GlobalStyles';
import Nav from './components/Nav';
import { AnimateSharedLayout } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <AnimateSharedLayout type="crossfade">
        <GlobalStyle />
        <Nav />
        <Route path={['/game/:id', '/']}>
          <Home />
        </Route>
      </AnimateSharedLayout>
    </div>
  );
}

export default App;
