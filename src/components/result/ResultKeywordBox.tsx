import styled from "styled-components";
import ResultChipList from "components/result/ResultChipList";
import {ResultKeywordBoxProps} from "types/props";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 50%;
  height: 400px;

  @media only screen and (max-width: 768px) {
    height: 300px;
  }
`;
const ResultKeywordMessage = styled.div`
  display: flex;
  align-items: center;
  
  width: 280px;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 40px;
  
  font-family: NotoSansKR-500;
  font-size: 36px;
  font-weight: 400;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
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