import React from "react";
import "App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "pages/MainPage";
import SelectPage from "pages/SelectPage";
import SearchPage from "pages/SearchPage";
import ResultPage from "pages/ResultPage";
import AppContextProvider from "./components/common/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/result/:foodId" element={<ResultPage/>}/>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
