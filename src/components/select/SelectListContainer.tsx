import React from "react";
import { Row } from "antd";
import GridCards from "./GridCards";
import styled from "styled-components";

type SelectItem = {
  id: number;
  name: string;
  src: string;
  alt: string;
};

type SelectList = {
  selectList: SelectItem[];
};

const SelectListWrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5% 0%;
`;

function SelectListContainer({ selectList }: SelectList) {
  const onClickGridCard = () => {};
  return (
    <SelectListWrapper>
      <Row gutter={[16, 16]}>
        {selectList &&
          selectList.map((selectItem: SelectItem) => (
            <GridCards
              key={selectItem.id}
              id={selectItem.id}
              src={selectItem.src}
              name={selectItem.name}
              alt={selectItem.alt}
              onClick={onClickGridCard}
            />
          ))}
      </Row>
    </SelectListWrapper>
  );
}

export default SelectListContainer;
