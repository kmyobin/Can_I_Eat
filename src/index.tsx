import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SelectPage from "./pages/SelectPage";
import SearchPage from "./pages/SearchPage";
import ResultPage from "./pages/ResultPage";
import App from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <App />
        {/*<BrowserRouter>*/}
        {/*  <Routes>*/}
        {/*    <Route path="/" element={<MainPage />} />*/}
        {/*    <Route path="/select" element={<SelectPage />} />*/}
        {/*    <Route path="/search" element={<SearchPage />} />*/}
        {/*    <Route path="/result/:foodId" element={<ResultPage />} />*/}
        {/*  </Routes>*/}
        {/*</BrowserRouter>*/}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
