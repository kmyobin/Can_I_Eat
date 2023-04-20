import styled from "styled-components";
import ResultChipList from "./ResultChipList";
import {ResultKeywordBoxProps} from "../../type/props";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 50%;
  height: 400px;
`;
const ResultKeywordMessage = styled.div`
  display: flex;
  align-items: center;
  
  width: 268px;
  height: 50px;
  margin-bottom: 40px;
  
  font-size: 36px;
  font-weight: 400;
`;


function ResultKeywordBox({rawMaterials}:ResultKeywordBoxProps) {
    const lengthOfMatches = rawMaterials.filter(({isMatched}) => isMatched).length
    return (
        <Wrapper>
            <ResultKeywordMessage>
                {`${lengthOfMatches}건의 키워드 일치`}
            </ResultKeywordMessage>
            <ResultChipList rawMaterials = {rawMaterials}/>
        </Wrapper>
    )
}

export default ResultKeywordBox;