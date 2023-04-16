import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const StyledButton = styled(Button)`
  &:where(.css-dev-only-do-not-override-1xusghl).ant-btn-default:not(
      :disabled
    ):hover {
    border: 1px solid #00b578;
    color: #00b578;
  }
  background-color: white;
  border: 1px solid #00b578;
  color: #00b578;
  font-family: NotoSansKR-400;
  border-radius: 20px;
  width: 50%;
  text-align: center;
`;
function ResetButton() {
  return <StyledButton>초기화🔄</StyledButton>;
}

export default ResetButton;
