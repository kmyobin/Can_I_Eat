import React from "react";
import SelectListContainer from "./SelectListContainer";
import { selectList } from "../../assets/select";
import SelectContainer from "./SelectContainer";
import styled from "styled-components";
import { Scrollbars } from "rc-scrollbars/lib/Scrollbars";

const ScrollbarsWrapper = styled(Scrollbars)`
  max-height: 80vh;
  max-width: 40vw;
  overflow: hidden;
  background-color: #bbbbbb;
`;

function Select() {
  return (
    <>
      <SelectContainer />
      <ScrollbarsWrapper>
        <SelectListContainer selectList={selectList} />
      </ScrollbarsWrapper>
    </>
  );
}

export default Select;
