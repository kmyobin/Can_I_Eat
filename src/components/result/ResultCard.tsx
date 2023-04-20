import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 400px;
`;
const ResultCardImage = styled.div`
  width: 400px;
  height: 200px;
  border: 1px solid black;
`;
const ResultCardFoodName = styled.p`
  margin: 20px 0 0;
  font-size: 36px;
`;
const ResultCardJudge = styled.p`
  margin: 0;
  
  color: #00B578;
  font-size: 36px;
`;

function ResultCard() {

    return (
        <Wrapper>
            <ResultCardImage/>
            <ResultCardFoodName>
                3.5 고추장 제육볶음
            </ResultCardFoodName>
            <ResultCardJudge>
                드셔도 됩니다!
            </ResultCardJudge>
        </Wrapper>
    )
}

export default ResultCard;