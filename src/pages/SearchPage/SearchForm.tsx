import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 40%;
  height: 600px;
  border: 1px solid;
  
  display: flex;
  justify-content: center;
`;
const ContentBox = styled.div`
  width: 80%;
  height: 100%;
  border: 1px solid;
`;


function SearchForm() {
    return (
        <Wrapper>
            <ContentBox>

            </ContentBox>
        </Wrapper>
    );
}

export default SearchForm;
