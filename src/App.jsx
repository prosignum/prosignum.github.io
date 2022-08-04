import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/nav/nav';
import { navItems } from './components/nav/navItems';
import BackgroundA from './components/animations/backgroundA';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          {
            navItems.map(item => <Route key={item.id} path={item.path} element={item.component} />)
          }
        </Routes>
      </BrowserRouter>
      <BackgroundA />
    </>
  )
}

export default App