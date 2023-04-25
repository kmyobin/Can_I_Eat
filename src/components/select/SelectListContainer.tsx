import React from "react";
import { Row } from "antd";
import GridCards from "components/select/GridCards";
import styled from "styled-components";
import { SelectItem } from "components/select/Select";
import { SelectListProps } from "components/select/Select";

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
