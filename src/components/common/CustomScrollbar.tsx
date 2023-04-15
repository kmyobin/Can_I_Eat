import React from "react";
import { Scrollbars } from "rc-scrollbars";
import styled from "styled-components";

const Thumb = styled.div`
  background-color: #1890ff;
  border-radius: 4px;
`;

const Track = styled.div`
  background-color: #f5f5f5;
`;

const CustomScrollbarWrapper = styled(Scrollbars)`
  max-height: 80vh;
`;

interface CustomScrollbarProps {
  children: JSX.Element; //React.ReactNode;
}

const CustomScrollbar = ({ children }: CustomScrollbarProps) => {
  return <CustomScrollbarWrapper>{children}</CustomScrollbarWrapper>;
};

export default CustomScrollbar;
