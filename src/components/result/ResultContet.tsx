import React, {useState} from "react";
import styled from "styled-components";
import ResultCard from "./ResultCard";
import ResultKeywordBox from "./ResultKeywordBox";
import {useParams} from "react-router-dom";
import {ResultContentProps} from "../../type/props";
import {SearchResult} from "../../type/data";

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
    const [selectedFood, setSelectedFood] = useState<SearchResult>(searchResults.filter(item => item.PRDLST_REPORT_NO === foodId)[0])


    return (
        <Wrapper>
            <ResultCard selectedFood={selectedFood}  />
            <ResultKeywordBox/>
        </Wrapper>
    );
}

export default ResultContent;
