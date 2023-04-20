import styled from "styled-components";
import ResultChipList from "./ResultChipList";

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


function ResultKeywordBox() {

    return (
        <Wrapper>
            <ResultKeywordMessage>
                0건의 키워드 일치
            </ResultKeywordMessage>
            <ResultChipList/>
        </Wrapper>
    )
}

export default ResultKeywordBox;