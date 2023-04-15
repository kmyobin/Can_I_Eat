import React, { useEffect } from "react";
import { Col } from "antd";
import styled from "styled-components";

interface SelectItem {
  id: number;
  name: string;
  src: string;
  alt: string;
}

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  padding-top: 100%;
  background: #f5f5f5;
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
  font-size: 0.7rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.35s ease-in-out;
  ${ImageWrapper}:hover & {
    opacity: 1;
  }
`;

function GridCards(selectItem: SelectItem) {
  const onClickImage = () => {};
  return (
    <Col lg={6} md={8} xs={24}>
      <ImageWrapper title={selectItem.name} onClick={onClickImage}>
        <Image
          src={require(`../../assets${selectItem.src}`)}
          alt={selectItem.alt}
        />
        <Text>{selectItem.name}</Text>
      </ImageWrapper>
    </Col>
  );
}

export default GridCards;
