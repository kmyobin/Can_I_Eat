import React from "react";
import SelectListContainer from "./SelectListContainer";
import { selectList } from "../../assets/select";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars/lib/Scrollbars";
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

const ScrollbarsWrapper = styled(Scrollbars)`
  max-height: 80vh;
  max-width: 40vw;
  overflow: hidden;
  background-color: #bbbbbb;
`;

const SelectWrapper = styled.div`
  max-height: 80vh;
  max-width: 40vw;
  overflow: hidden;
  background-color: #bbbbbb;
`;

function Select() {
  return (
    <Wrapper>
      <SelectWrapper>
        <SelectContainer />
      </SelectWrapper>
      <ScrollbarsWrapper>
        <SelectListContainer selectList={selectList} />
      </ScrollbarsWrapper>
    </Wrapper>
  );
}

export default Select;
