import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 60%;
  height: 600px;
  border: 1px solid;
  
  justify-content: center;
  display: flex;
`;
const ContentBox = styled.div`
  width: 80%;
  height: 100%;
  border: 1px solid;
`;

function SearchContent() {
    return (
        <Wrapper>
            <ContentBox>

            </ContentBox>
        </Wrapper>
    );
}

export default SearchContent;
