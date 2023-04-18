import React, {useState} from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";
import {SearchResult} from "../../type";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

function SearchContent() {
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSearchResultsChange(newSearchResults: SearchResult[]) {
        setSearchResults(newSearchResults);
    };
    function handleIsLoadingToggle() {
        setIsLoading(prevState => !prevState);
    };

    return (
        <Wrapper>
            <SearchForm
                handleSearchResultsChange = {handleSearchResultsChange}
                handleIsLoadingToggle = {handleIsLoadingToggle}
            />
            <SearchList
                isLoading = {isLoading}
                searchResults = {searchResults}
            />
        </Wrapper>
    );
}

export default SearchContent;
