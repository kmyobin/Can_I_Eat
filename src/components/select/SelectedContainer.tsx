import React, { useEffect } from "react";
import styled from "styled-components";
import { SelectListProps } from "./Select";
import { SelectItem } from "./Select";
import GridCard from "./GridCard";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  float: left; // 왼쪽부터 채워지게
  margin: 3px 0px;

  & > * {
    // Wrapper의 자식 컴포넌트는 모두 크기가 50으로 고정
    max-width: 55px;
    max-height: 55px;
    margin-left: 5px;
    margin-right: 5px;
    @media only screen and (max-width: 768px) {
      max-width: 40px;
      max-height: 40px;
    }
  }
`;

function SelectedContainer({ selectList, setSelectList }: SelectListProps) {
  useEffect(() => {
    console.log(selectList);
  });
  return (
    <Wrapper>
      {selectList.map((selectItem: SelectItem, index) => (
        <GridCard
          key={selectItem.id}
          id={selectItem.id}
          src={selectItem.src}
          name={selectItem.name}
          alt={selectItem.alt}
          selectList={selectList}
          setSelectList={setSelectList}
        />
      ))}
    </Wrapper>
  );
}

export default SelectedContainer;
