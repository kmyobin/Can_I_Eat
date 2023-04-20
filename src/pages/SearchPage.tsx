import React from "react";
import PageTemplate from "../layout/PageTemplate";
import SearchContent from "../components/search/SearchContent";
import {SearchPageProps} from "../type/props";

function SearchPage({searchResults,handleSearchResultsChange}:SearchPageProps) {
    return (
            <PageTemplate content={
                <SearchContent
                    searchResults={searchResults}
                    handleSearchResultsChange={handleSearchResultsChange}
                />}/>
    );
}

export default SearchPage;
