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
  background: tomato;
`;
const ResultCardMessage = styled.div`
  width: 421px;
  height: 143px;
  background: yellow;
`;

function ResultCard() {

    return (
        <Wrapper>
            <ResultCardImage/>
            <ResultCardMessage/>
        </Wrapper>
    )
}

export default ResultCard;