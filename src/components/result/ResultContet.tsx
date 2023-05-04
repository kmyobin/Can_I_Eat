import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import ResultCard from "components/result/ResultCard";
import ResultKeywordBox from "components/result/ResultKeywordBox";
import {useParams} from "react-router-dom";
import {rawMaterial, SearchResult} from "type/data";
import {AppContext} from "components/common/AppContextProvider";

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
    const {selectedList} = useContext(AppContext);
    const {searchResults} = useContext(AppContext);
    const { foodId } = useParams();
    const [selectedFood] = useState<SearchResult>(searchResults.filter(({PRDLST_REPORT_NO}) => PRDLST_REPORT_NO === foodId)[0])
    const list = selectedFood.RAWMTRL_NM.split(",").map(item => ({
        rawMaterialName: item,
        isMatched: new RegExp(`${selectedList.join("|")}`, 'gi').test(item)
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
