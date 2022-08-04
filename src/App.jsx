import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import Nav from './components/nav/nav';
import { navItems } from './components/nav/navItems';
import BackgroundA from './components/animations/backgroundA';

function App() {
  return (
    <>
      <HashRouter>
        <Nav />
        <Routes>
          {
            navItems.map(item => <Route key={item.id} path={item.path} element={item.component} />)
          }
        </Routes>
      </HashRouter>
      <BackgroundA />
    </>
  )
}

export default App