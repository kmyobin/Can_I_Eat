import React from "react";
import PageTemplate from "../layout/PageTemplate";
import ResultContent from "../components/result/ResultContet";
import {ResultPageProps} from "../type";

function ResultPage({searchResults, handleSearchResultsChange}:ResultPageProps) {
    return (
        <PageTemplate content={
            <ResultContent
                searchResults = {searchResults}
                handleSearchResultsChange = {handleSearchResultsChange}
            />}
        />
    );
}

export default ResultPage;
