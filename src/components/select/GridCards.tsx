import React from "react";
import { Col } from "antd";
import styled from "styled-components";
import { SelectItem } from "./Select";
import GridCard from "./GridCard";
export type GridCardsProps = {
  id: number;
  name: string;
  src: string;
  alt: string;
  selectList: SelectItem[]; // 선택된 리스트
  setSelectList: (selectList: SelectItem[]) => void | undefined;
};

export type ImageWrapperProps = {
  click: boolean;
};

const ImageWrapper = styled.div<ImageWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  padding-top: 100%;
  background: ${(props) =>
    props.click ? "rgba(0, 181, 120, 0.25)" : "#f5f5f5"};
  transition: background-color 0.35s ease-in-out; // 배경색 선택 부드럽게

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-family: NotoSansKR-500;

  &:hover > div {
    opacity: 1;
  }
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 0.35s ease-in-out;

  ${ImageWrapper}:hover & {
    opacity: 0;
  }
`;

const Text = styled.div`
  position: absolute;
  font-size: 6px;
  top: 50%;
  left: 48.7%; //50%;
  text-align: center;
  vertical-align: middle;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.35s ease-in-out;

  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`;

function GridCards({
  id,
  src,
  name,
  alt,
  selectList,
  setSelectList,
}: GridCardsProps) {
  return (
    <Col lg={6} md={6} xs={8}>
      <GridCard
        id={id}
        src={src}
        name={name}
        alt={alt}
        selectList={selectList}
        setSelectList={setSelectList}
      />
    </Col>
  );
}

export default GridCards;
