import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import List from './pages/List.tsx';
import Home from './pages/Home.tsx';
import Error from "./pages/Error.tsx";
import { ManaContext } from './components/ManaContext.tsx';

const App = () => {
  const [mana, setMana] = useState("all");
  const value = useMemo(() => ({ mana, setMana }), [mana, setMana]);
  return (
    <div>
      <BrowserRouter>
      <ManaContext.Provider value={value}>
          <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/list' element={<List />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </ManaContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
