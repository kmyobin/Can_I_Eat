import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import SelectPage from "./pages/SelectPage";
import SearchPage from "./pages/SearchPage";
import ResultPage from "./pages/ResultPage";
import {SearchResult} from "./type/data";

function App() {
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

    function handleSearchResultsChange(newSearchResults: SearchResult[]) {
        setSearchResults(newSearchResults);
    };

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/select" element={<SelectPage />} />
                    <Route path="/search" element={
                        <SearchPage
                            searchResults={searchResults}
                            handleSearchResultsChange={handleSearchResultsChange}
                        />
                    }/>
                    <Route path="/result/:foodId" element={
                        <ResultPage
                            searchResults={searchResults}
                            handleSearchResultsChange={handleSearchResultsChange}
                        />
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
