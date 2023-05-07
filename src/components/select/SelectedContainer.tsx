import React from "react";
import styled from "styled-components";
import { SelectListProps } from "types/props";
import { SelectItem } from "types/data";
import GridCard from "components/select/GridCard";

const Wrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  float: left; // 왼쪽부터 채워지게
  margin: 3px 0px;
  min-height: 80px; // 스크롤바 띄워놓기

  @media only screen and (max-width: 768px) {
    min-height: 60px; // 스크롤바 띄워놓기
    width: 280px;
  }

  & > * {
    // Wrapper의 자식 컴포넌트는 모두 크기가 55으로 고정
    max-width: 100px;
    max-height: 100px;
    margin: 5px;
    margin-right: 25px;
    margin-bottom: 20px;
    @media only screen and (max-width: 768px) {
      max-width: 50px;
      max-height: 50px;
      margin-right: 8px;
    }
  }

  &::-webkit-scrollbar {
    height: 8px; // 수평 스크롤바
    @media only screen and (max-width: 768px) {
      height: 5px;
    }
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 24px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 181, 120, 0.25);
    border-radius: 24px;
  }
`;

function SelectedContainer({ selectList, setSelectList }: SelectListProps) {
  return (
    <Wrapper>
      {selectList.map((selectItem: SelectItem, index) => (
        <GridCard
          key={selectItem.id}
          selectItem={selectItem}
          selectList={selectList}
          setSelectList={setSelectList}
        />
      ))}
    </Wrapper>
  );
}

export default SelectedContainer;
