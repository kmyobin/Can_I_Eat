import styled from "styled-components";
import {ResultCardProps} from "../../type/props";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 400px;
`;
const ResultCardImage = styled.img`
  width: 400px;
  height: 200px;
  background-image: url(${props => props.src});
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

function ResultCard({selectedFood}:ResultCardProps) {

    return (
        <Wrapper>
            <ResultCardImage src ={selectedFood.IMG_URL}/>
            <ResultCardFoodName>
                {selectedFood.PRDLST_NM}
            </ResultCardFoodName>
            <ResultCardJudge>
                드셔도 됩니다!
            </ResultCardJudge>
        </Wrapper>
    )
}

export default ResultCard;