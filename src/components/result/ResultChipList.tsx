import styled from "styled-components";
import {ResultChipItemProps, ResultChipListProps} from "types/props";

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  
  width: 491px;
  height: 230px;

  padding-right: 20px;

  overflow-y: scroll;
  /* 스크롤바 너비 조정 */
  ::-webkit-scrollbar {
    width: 6.5px;
  }
  /* 스크롤바 현재 위치 */
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #00B57840;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #00B578;
  }
  /* 스크롤바 전체 부분 */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: #ddd;
  }
  @media only screen and (max-width: 768px) {
    width: 350px;
  }
`;

const ResultChipItem = styled.div<ResultChipItemProps>`
    display: block;
  
    width: 100px;
    height: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    background: ${props => props.isMatched ? '#FF3141' : '#00B578'};
    border-radius: 20px;
    overflow: hidden;
  
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    line-height: 40px;
    color: #FFF;
    font-size: 20px;
    font-weight: 400;

  @media only screen and (max-width: 768px) {
    width: 64px;
    height: 30px;
    margin: 0 auto;
    
    font-size: 11px;
    line-height: 30px;
  }
    
`;

function ResultChipList({rawMaterials}:ResultChipListProps) {

    return (
        <Wrapper>
            {
                rawMaterials.map(({rawMaterialName, isMatched}) => (
                    <ResultChipItem key={rawMaterialName}
                                    isMatched={isMatched}
                                    title={rawMaterialName}
                                    onClick={(e) => {
                                        alert(e.currentTarget.textContent);
                                    }}
                    >
                        {rawMaterialName}</ResultChipItem>
                ))
            }
        </Wrapper>
    )
}

export default ResultChipList;