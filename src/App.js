import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import List from './pages/List.tsx';
import Home from './pages/Home.tsx';
import Search from './pages/Search.tsx';
import Error from "./pages/Error.tsx";
import { ManaContext } from './components/ManaContext.tsx';
import { SearchContext } from './components/SearchContext.tsx';

const App = () => {
  const [mana, setMana] = useState("all");
  const value1 = useMemo(() => ({ mana, setMana }), [mana, setMana]);
  const [search, setSearch] = useState('');
  const value2 = useMemo(() => ({ search, setSearch }), [search, setSearch]);
  return (
    <div>
      <BrowserRouter>
      <ManaContext.Provider value={value1}>
      <SearchContext.Provider value={value2}>
          <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/list' element={<List />} />
            <Route path='/search' element={<Search />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </SearchContext.Provider>
        </ManaContext.Provider>
      </BrowserRouter>
    </div>
  );
};



export default App;
