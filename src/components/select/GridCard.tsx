import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GridCardsProps, ImageWrapperProps } from "types/props";
import { Col } from "antd";

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
  font-size: 20px;
  top: 50%;
  left: 50%;
  text-align: center;
  vertical-align: middle;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.35s ease-in-out;
  white-space: nowrap; // 폰트 한 줄

  ${ImageWrapper}:hover & {
    opacity: 1;
  }
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

function GridCard({ selectItem, selectList, setSelectList }: GridCardsProps) {
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    // 이미 선택되어있는 아이템이라면 isClick을 true로 설정
    const isSelected = selectList.find((item) => item.id === selectItem.id);
    setIsClick(!!isSelected);
  }, [selectList, selectItem.id]);

  function onClickImage(id: number) {
    setIsClick(!isClick);
    const selectedItem = selectItem;
    const isSelected = selectList.find((item) => item.id === id);

    if (isSelected) {
      // 이미 선택되어있는 아이템이라면 selectList에서 제거
      const updatedList = selectList.filter((item) => item.id !== id);
      setSelectList(updatedList);
    } else {
      // 선택되어있지 않은 아이템이라면 selectList에 추가
      setSelectList([...selectList, selectedItem]);
    }
  }
  return (
    <Col xs={24}>
      <ImageWrapper
        click={isClick}
        title={selectItem.name}
        onClick={() => onClickImage(selectItem.id)}
      >
        <Image
          src={require(`../../assets${selectItem.src}`)}
          alt={selectItem.alt}
        />
        <Text>{selectItem.name}</Text>
      </ImageWrapper>
    </Col>
  );
}

export default GridCard;
