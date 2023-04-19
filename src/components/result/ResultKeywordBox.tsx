import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 50%;
  height: 400px;
`;
const ResultKeywordMessage = styled.div`
  width: 268px;
  height: 50px;
  margin-bottom: 40px;
  
  background: blue;
`;
const ResultKeywordChipBox = styled.div`
  width: 491px;
  height: 230px;
  
  background: aquamarine;
`;

function ResultKeywordBox() {

    return (
        <Wrapper>
            <ResultKeywordMessage>

            </ResultKeywordMessage>
            <ResultKeywordChipBox>

            </ResultKeywordChipBox>
        </Wrapper>
    )
}

export default ResultKeywordBox;