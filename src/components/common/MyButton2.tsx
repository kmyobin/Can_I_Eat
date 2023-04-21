import React from "react";
import styled from "styled-components";
import { Button } from "antd";

type text = { text: string };
const StyledButton = styled(Button)`
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
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-family: NotoSansKR-400;

    width: 65px;
    height: 25px;
    font-size: 11px;
  }
`;
function MyButton2({ text }: text) {
  return <StyledButton>{text}</StyledButton>;
}

export default MyButton2;
