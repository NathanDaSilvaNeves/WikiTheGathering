import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/List.tsx";
import Home from "./pages/Home.tsx";
import Error from "./pages/Error.tsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
