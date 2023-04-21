import React, { useEffect } from "react";
import styled from "styled-components";
import { SelectListProps } from "./Select";
import { SelectItem } from "./Select";
import GridCard from "./GridCard";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-x: auto;
`;

const MaxWidthGridCard = styled(GridCard)`
  width: 50px;
  height: 50px;

  /*img {
    max-width: 100%;
    max-height: 100%;
  }*/
`;

function SelectedContainer({ selectList, setSelectList }: SelectListProps) {
  useEffect(() => {
    console.log(selectList);
  });
  return (
    <Wrapper>
      {selectList &&
        selectList.map((selectItem: SelectItem, index) => (
          <MaxWidthGridCard
            key={selectItem.id}
            id={selectItem.id}
            src={selectItem.src}
            name={selectItem.name}
            alt={selectItem.alt}
            selectList={selectList}
            setSelectList={setSelectList}
          />
        ))}
    </Wrapper>
  );
}

export default SelectedContainer;
