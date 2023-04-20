import React, {useState} from "react";
import styled from "styled-components";
import ResultCard from "./ResultCard";
import ResultKeywordBox from "./ResultKeywordBox";
import {useParams} from "react-router-dom";
import {ResultContentProps} from "../../type/props";

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

function ResultContent({searchResults,handleSearchResultsChange}:ResultContentProps) {
    const { foodId } = useParams();

    return (
        <Wrapper>
            <ResultCard/>
            <ResultKeywordBox/>
        </Wrapper>
    );
}

export default ResultContent;
