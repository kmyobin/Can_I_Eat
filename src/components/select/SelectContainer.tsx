import React from "react";
import styled from "styled-components";
import SelectedContainer from "./SelectedContainer";
import MyButton2 from "../common/MyButton2";
import ResetButton from "../common/ResetButton";

interface SelectItem {
  id: number;
  name: string;
  src: string;
  alt: string;
}

interface SelectList {
  selectList?: SelectItem[];
}
const Wrapper = styled.div`
  justify-content: space-between;
  align-items: center;

  & > div:nth-child(2) {
    margin-right: auto;
  }
`;

const TextArea = styled.div`
  margin-bottom: 3px;
  font-family: NotoSansKR-700;
  font-size: 1rem;
  text-align: center;
`;
const ButtonWrapper = styled.div`
  width: 100%;
`;

function SelectContainer({ selectList }: SelectList) {
  return (
    <Wrapper>
      <TextArea>당신은 어떤 사람인가요?</TextArea>
      <ButtonWrapper>
        <ResetButton />
      </ButtonWrapper>
      <SelectedContainer selectList={selectList} />
      <MyButton2 text="확정 ✅" />
    </Wrapper>
  );
}

export default SelectContainer;
