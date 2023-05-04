import React from "react";
import { Col } from "antd";
import GridCard from "components/select/GridCard";
import { GridCardsProps } from "types/props";

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
