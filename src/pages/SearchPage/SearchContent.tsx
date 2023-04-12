import React from "react";
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
    return (
        <Wrapper>
            <SearchForm/>
            <SearchList/>
        </Wrapper>
    );
}

export default SearchContent;
