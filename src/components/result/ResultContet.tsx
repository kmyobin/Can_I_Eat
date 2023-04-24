import React, {useState} from "react";
import styled from "styled-components";
import ResultCard from "./ResultCard";
import ResultKeywordBox from "./ResultKeywordBox";
import {useParams} from "react-router-dom";
import {ResultContentProps} from "../../type/props";
import {rawMaterial, SearchResult} from "../../type/data";

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

function ResultContent({searchResults}:ResultContentProps) {
    const keywords = ['감자','돼지', '밀', '어육', '복숭아', '땅콩'];
    const { foodId } = useParams();
    const [selectedFood] = useState<SearchResult>(searchResults.filter(({PRDLST_REPORT_NO}) => PRDLST_REPORT_NO === foodId)[0])
    const list = selectedFood.RAWMTRL_NM.split(",").map(item => ({
        rawMaterialName: item,
        isMatched: new RegExp(`${keywords.join("|")}`, 'gi').test(item)
    }));
    const [rawMaterials] = useState<rawMaterial[]>(list);


    return (
        <Wrapper>
            <ResultCard selectedFood={selectedFood} rawMaterials = {rawMaterials}  />
            <ResultKeywordBox rawMaterials = {rawMaterials}/>
        </Wrapper>
    );
}

export default ResultContent;
