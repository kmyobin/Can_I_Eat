import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { SelectListProps } from "types/props";

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
  width: 88px;
  height: 40px;
  font-size: 17px;
  margin-bottom: 25px;
  /* 글씨 가운데 정렬 */
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 55px;
    height: 20px;
    font-size: 8px;
    margin-bottom: 12px;
  }
`;
function ResetButton({ selectList, setSelectList }: SelectListProps) {
  return (
    <StyledButton onClick={() => setSelectList([])}>초기화🔄</StyledButton>
  );
}

export default ResetButton;
