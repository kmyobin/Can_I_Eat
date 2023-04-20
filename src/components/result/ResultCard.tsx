import styled from "styled-components";
import {ResultCardJudgeProps, ResultCardProps} from "../../type/props";
import ThumbUpImg from "../../assets/images/thumb-up.jpg"
import ThumbDownImg from "../../assets/images/thumb-down.jpg"

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
const ResultCardJudge = styled.p<ResultCardJudgeProps>`
  margin: 0;
  
  color: ${props => props.isPossible ? '#00B578' : '#FF3141'};
  font-size: 36px;
`;

function ResultCard({selectedFood, rawMaterials}:ResultCardProps) {
    const isPossible = !rawMaterials.filter(({isMatched}) => isMatched).length

    return (
        <Wrapper>
            <ResultCardImage src ={
                selectedFood.IMG_URL || (isPossible ? ThumbUpImg : ThumbDownImg)}/>
            <ResultCardFoodName>
                {selectedFood.PRDLST_NM}
            </ResultCardFoodName>
            <ResultCardJudge isPossible = {isPossible}>
                {isPossible ? '드셔도 됩니다' : '드시면 안됩니다!'}
            </ResultCardJudge>
        </Wrapper>
    )
}

export default ResultCard;