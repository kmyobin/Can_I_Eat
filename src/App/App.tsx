import React, { useState } from "react";
import "App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import SelectPage from "pages/SelectPage";
import SearchPage from "pages/SearchPage";
import { SearchResult } from "type";
import SelectContextProvider from "./SelectContextProvider";

function App() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>();
  return (
    <SelectContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/search" element={<SearchPage />} />
          {/*<Route path="/result/:foodId" element={<ResultPage/>}/>*/}
        </Routes>
      </BrowserRouter>
    </SelectContextProvider>
  );
}

export default App;
