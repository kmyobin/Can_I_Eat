import React from "react";
import { Row } from "antd";
import GridCards from "components/select/GridCards";
import styled from "styled-components";
import { SelectListProps } from "types/props";
import { SelectItem } from "types/data";


const SelectListWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5% 0%;
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
              selectItem={selectItem}
              selectList={selectList}
              setSelectList={setSelectList}
            />
          ))}
      </Row>
    </SelectListWrapper>
  );
}

export default SelectListContainer;
