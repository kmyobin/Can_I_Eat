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

    const handleSearchKeywordChange = (newSearchKeyword: string) => {
        setSearchKeyword(newSearchKeyword);
    };

    return (
        <Wrapper>
            <SearchForm
                searchKeyword = {searchKeyword}
                handleSearchKeywordChange = {handleSearchKeywordChange}/>
            <SearchList/>
        </Wrapper>
    );
}

export default SearchContent;
