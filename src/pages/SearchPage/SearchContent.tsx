import React, {useState} from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

function SearchContent() {
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);


    const handleSearchKeywordChange = (newSearchKeyword: string) => {
        setSearchKeyword(newSearchKeyword);
    };
    const handleSearchResultsChange = (newSearchResults: SearchResult[]) => {
        setSearchResults(newSearchResults);
    }

    return (
        <Wrapper>
            <SearchForm
                searchKeyword = {searchKeyword}
                handleSearchKeywordChange = {handleSearchKeywordChange}
                handleSearchResultsChange = {handleSearchResultsChange}
            />

            <SearchList
                searchResults = {searchResults}
            />
        </Wrapper>
    );
}

export default SearchContent;
