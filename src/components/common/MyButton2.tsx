import React from "react";
import styled from "styled-components";
import { Button } from "antd";
import { SelectItem } from "components/select/Select";

type MyButton2Props = { text?: string; selectList: SelectItem[] };

const StyledButton = styled(Button)<MyButton2Props>`
  &:where(.css-dev-only-do-not-override-1xusghl).ant-btn-default:not(
      :disabled
    ):hover {
    border: none;
    color: white;
  }
  border: none; // 기본 테두리 없앰
  background-color: ${({ selectList }) =>
    selectList.length === 0 ? "rgba(0, 181, 120, 0.25)" : "#00b578"};
  color: white;
  font-family: NotoSansKR-500;
  width: 200px;
  text-align: center;
  pointer-events: ${({ selectList }) =>
    selectList.length === 0 ? "none" : "auto"}; // 클릭 안되게
  box-shadow: none; // 버튼 클릭 시 효과 없앰
  @media only screen and (max-width: 768px) {
    font-family: NotoSansKR-400;
    width: 65px;
    height: 25px;
    font-size: 11px;
  }
`;
function MyButton2({ text, selectList }: MyButton2Props) {
  return <StyledButton selectList={selectList}>{text}</StyledButton>;
}

export default MyButton2;