import React from "react";
import styled from "styled-components";
import "../../App.css";
import { UndoOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const Style = {
  Header: styled.div`
    position: fixed;
    width: 100%;
    //height: 70px;
    background: #00b578;
    font-family: NotoSansKR-700;
    font-size: 1.2vw; //1.5rem;
    padding: 1%;
    color: #ffffff;
  `,
  Logo: styled.div`
    float: left;
    width: 50%;
  `,
  Redo: styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
  `,
};
function Header() {
  const navigate = useNavigate();
  const onClickUndo = () => {
    navigate("/");
  };
  return (
    <Style.Header>
      <Style.Logo>Can I Eat?</Style.Logo>
      <Style.Redo>
        <UndoOutlined onClick={onClickUndo} />
      </Style.Redo>
    </Style.Header>
  );
}

export default Header;
