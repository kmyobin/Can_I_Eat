import React from "react";
import { Col } from "antd";
import { SelectItem } from "components/select/Select";
import GridCard from "components/select/GridCard";

export type GridCardsProps = {
  selectItem: SelectItem;
  selectList: SelectItem[]; // 선택된 리스트
  setSelectList: (selectList: SelectItem[]) => void | undefined;
};

export type ImageWrapperProps = {
  click: boolean;
};

function GridCards({ selectItem, selectList, setSelectList }: GridCardsProps) {
  return (
    <Col lg={6} md={6} xs={8}>
      <GridCard
        selectItem={selectItem}
        selectList={selectList}
        setSelectList={setSelectList}
      />
    </Col>
  );
}

export default GridCards;
