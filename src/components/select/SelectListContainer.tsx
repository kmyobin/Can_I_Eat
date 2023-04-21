import React from "react";
import { Row } from "antd";
import GridCards from "./GridCards";
import styled from "styled-components";
import { SelectItem } from "./Select";
import { SelectListProps } from "./Select";

const SelectListWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5% 0%;

  /*@media only screen and (max-width: 768px) {
    .ant-col-lg-6 {
      width: 25%;
      flex: 0 0 25%;
      max-width: 25%;
    }
  }*/
`;

function SelectListContainer({
  selectList,
  setSelectList,
  selectArray,
}: SelectListProps) {
  return (
    <SelectListWrapper>
      <Row gutter={[16, 16]}>
        {selectArray &&
          selectArray.map((selectItem: SelectItem) => (
            <GridCards
              key={selectItem.id}
              id={selectItem.id}
              src={selectItem.src}
              name={selectItem.name}
              alt={selectItem.alt}
              selectList={selectList}
              setSelectList={setSelectList}
            />
          ))}
      </Row>
    </SelectListWrapper>
  );
}

export default SelectListContainer;
