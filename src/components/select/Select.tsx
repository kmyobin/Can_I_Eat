import React, { useState } from "react";
import SelectListContainer from "./SelectListContainer";
import { selectArray } from "../../assets/select";
import styled from "styled-components";
import SelectContainer from "./SelectContainer";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  font-family: NotoSansKR-400;
  font-size: 8px;
  color: #999999;
  width: 90%;
  text-align: right;

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

const ScrollbarsWrapper = styled.div`
  max-height: 80vh;
  max-width: 35vw;
  overflow-y: auto;
  //background-color: #bbbbbb; // 확인용

  @media only screen and (max-width: 768px) {
    max-width: 90%;
    margin-bottom: 10px;
  }

  &::-webkit-scrollbar {
    width: 5px; // 수직 스크롤바
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

const SelectWrapper = styled.div`
  max-height: 80vh;
  max-width: 40vw;
  //overflow: hidden;
  // background-color: #bbbbbb;

  @media only screen and (max-width: 768px) {
    max-width: 100vw;
    margin-bottom: 10px;
  }
`;

export type SelectItem = {
  id: number;
  name: string;
  src: string;
  alt: string;
  types: string[];
};

export type SelectListProps = {
  selectList: SelectItem[]; // 선택된 리스트
  setSelectList: (selectList: SelectItem[]) => void | undefined;
  selectArray?: SelectItem[]; // 기존 22개의 리스트
};

function Select() {
  const [selectList, setSelectList] = useState<SelectItem[]>([]);

  return (
    <Wrapper>
      <SelectWrapper>
        <SelectContainer
          selectList={selectList}
          setSelectList={setSelectList}
        />
      </SelectWrapper>
      <TextWrapper>길게 누르면 자세한 정보를 알 수 있어요!</TextWrapper>
      <ScrollbarsWrapper>
        <SelectListContainer
          selectArray={selectArray}
          selectList={selectList}
          setSelectList={setSelectList}
        />
      </ScrollbarsWrapper>
    </Wrapper>
  );
}

export default Select;
