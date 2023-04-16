import React from "react";
import styled from "styled-components";
interface SelectItem {
  id: number;
  name: string;
  src: string;
  alt: string;
}

interface SelectList {
  selectList?: SelectItem[];
}

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

function SelectedContainer({ selectList }: SelectList) {
  return <Wrapper>선택 부분들</Wrapper>;
}

export default SelectedContainer;