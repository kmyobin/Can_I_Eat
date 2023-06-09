import React, { useState } from "react";
import SelectListContainer from "components/select/SelectListContainer";
import { selectArray } from "assets/fixtures/select";
import styled from "styled-components";
import SelectContainer from "components/select/SelectContainer";
import { SelectItem } from "types/data";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-around;
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
  width: 50%;
  overflow-y: auto;

  @media only screen and (max-width: 768px) {
    max-width: 90%;
    width: 100%;
    margin-bottom: 10px;

    height: 70%;
  }

  &::-webkit-scrollbar {
    width: 8px; // 수직 스크롤바
    @media only screen and (max-width: 768px) {
      width: 5px; // 수직 스크롤바
    }
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 24px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 181, 120, 0.25);
    border-radius: 24px;
    :hover {
      background-color: rgba(0, 181, 120, 1);
    }
  }
`;

const SelectWrapper = styled.div`
  max-height: 80vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
`;

function SelectContent() {
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

export default SelectContent;
