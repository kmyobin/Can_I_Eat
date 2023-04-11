import React from "react";
import styled from "styled-components";

const Style = {
  Header: styled.div`
    position: fixed;
    width: 100%;
    height: 70px;
    background: #00b578;
  `,
};
function Header() {
  return <Style.Header>헤더</Style.Header>;
}

export default Header;
