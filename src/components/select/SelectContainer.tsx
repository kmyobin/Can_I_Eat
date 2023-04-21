import React from "react";
import styled from "styled-components";
import SelectedContainer from "./SelectedContainer";
import MyButton2 from "../common/MyButton2";
import ResetButton from "../common/ResetButton";
import { SelectListProps } from "./Select";
import { SelectItem } from "./Select";
const Wrapper = styled.div`
  justify-content: space-between;
  align-items: center;

  & > div:nth-child(2) {
    margin-right: auto;
  }
`;

const TextArea = styled.div`
  margin-bottom: 20px;
  font-family: NotoSansKR-500;
  font-size: 25px;

  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
const ButtonWrapper = styled.div`
  width: 100%;
`;

const ButtonWrapper2 = styled(ButtonWrapper)`
  display: flex;
  justify-content: center;
`;

function SelectContainer({ selectList, setSelectList }: SelectListProps) {
  return (
    <Wrapper>
      <TextArea>당신은 어떤 사람인가요?</TextArea>
      <ButtonWrapper>
        <ResetButton selectList={selectList} setSelectList={setSelectList} />
      </ButtonWrapper>
      <SelectedContainer
        selectList={selectList}
        setSelectList={setSelectList}
      />
      <ButtonWrapper2>
        <MyButton2 text="확정 ✅" />
      </ButtonWrapper2>
    </Wrapper>
  );
}

export default SelectContainer;
