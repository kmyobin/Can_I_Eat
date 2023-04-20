import styled from "styled-components";

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
  
`;

const ResultChipItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  
    width: 100px;
    height: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    background: #00B578;
    border-radius: 20px;
  
    color: #FFF;
    font-size: 20px;
    font-weight: 400;
    
`;

function ResultChipList() {

    return (
        <Wrapper>
            <ResultChipItem>떡류</ResultChipItem>
        </Wrapper>
    )
}

export default ResultChipList;