import React, {useState} from "react";
import styled from "styled-components";
import ResultCard from "./ResultCard";
import ResultKeywordBox from "./ResultKeywordBox";

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

function ResultContent() {


    return (
        <Wrapper>
            <ResultCard/>
            <ResultKeywordBox/>
        </Wrapper>
    );
}

export default ResultContent;
