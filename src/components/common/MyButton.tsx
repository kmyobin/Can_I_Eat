import React from "react";
import { Button } from "antd";
import styled from "styled-components";
type text = { text: string };

const StyledButton = styled(Button)`
  //&:active {
  //  box-shadow: 0 0 5px #00b578; /* 클릭했을 때 버튼 주변에 회색 그림자 효과가 생깁니다. */
  //}
  &:where(.css-dev-only-do-not-override-1xusghl).ant-btn-default:not(
      :disabled
    ):hover {
    border: none;
    color: white;
  }
  background-color: #00b578;
  color: white;
  font-family: NotoSansKR-500;
  width: 200px;
  border-radius: 20px;
`;

function MyButton({ text }: text) {
  return <StyledButton>{text}</StyledButton>;
}

export default MyButton;
