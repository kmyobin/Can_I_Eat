import React from "react";
import styled from "styled-components";
import SelectedContainer from "components/select/SelectedContainer";
import SelectButton from "components/common/SelectButton";
import ResetButton from "components/common/ResetButton";
import { SelectListProps } from "types/props";

const Wrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  max-width: 530px; //351px; //260px;
  min-height: 650px; //350px;

  position: relative; // 버튼 하단 고정

  & > div:nth-child(2) {
    margin-right: auto;
  }

  @media only screen and (max-width: 768px) {
    max-width: 155px;
    min-height: 150px;
  }
`;

const TextArea = styled.div`
  font-family: NotoSansKR-500;
  font-size: 36px;
  margin-bottom: 150px; //80px;

  text-align: center;

  @media only screen and (max-width: 768px) {
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 20px;
  }
`;
const ButtonWrapper = styled.div`
  width: 100%;
`;

const ButtonWrapper2 = styled(ButtonWrapper)`
  display: flex;
  justify-content: center;
  position: absolute; // 확정 버튼 하단 고정
  bottom: 0;
`;

function SelectContainer({ selectList, setSelectList }: SelectListProps) {
  return (
    <Wrapper>
      <TextArea>당신은 어떤 사람인가요?</TextArea>
      <ButtonWrapper>
        {selectList.length > 0 && (
          <ResetButton selectList={selectList} setSelectList={setSelectList} />
        )}
      </ButtonWrapper>
      <SelectedContainer
        selectList={selectList}
        setSelectList={setSelectList}
      />
      <ButtonWrapper2>
        <SelectButton text="확정 ✅" selectList={selectList} />
      </ButtonWrapper2>
    </Wrapper>
  );
}

export default SelectContainer;
