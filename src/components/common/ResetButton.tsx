import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { SelectListProps } from "components/select/types";

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
  width: 65px;
  height: 25px;
  font-size: 10px;
  /* 글씨 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 50px;
    height: 20px;
    font-size: 8px;
  }
`;
function ResetButton({ selectList, setSelectList }: SelectListProps) {
  return (
    <StyledButton onClick={() => setSelectList([])}>초기화🔄</StyledButton>
  );
}

export default ResetButton;
