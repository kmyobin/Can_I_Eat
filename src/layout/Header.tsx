import React from "react";
import styled from "styled-components";
import "../App.css";
import { UndoOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const Style = {
  Header: styled.div`
    position: sticky;
    top: 0;
    height: 80px;
    width: 100vw;
    background: #00b578;
    font-family: NotoSansKR-700;
    font-size: 24px; //1.5rem;
    //padding-left: 20px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
      /* 모바일에서는 Logo와 Redo를 가운데와 오른쪽 끝으로 정렬 */
      font-size: 16px;
      padding: 0;
      height: 50px;
      justify-content: center;
    }
  `,
  Logo: styled.div`
    @media only screen and (min-width: 769px) {
      // 노트북, 데스크탑
      float: left;
      padding: 1%; // Logo에 padding 추가하면 가로 스크롤바 해결
      width: 50%;
    }
    @media only screen and (max-width: 768px) {
      // 모바일
      float: none;
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  `,
  Redo: styled.div`
    padding-right: 3%;
    padding-left: 3%;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    font-size: 100%;
    @media only screen and (max-width: 768px) {
      /* 모바일에서는 Redo를 오른쪽 끝에 배치 */
      position: absolute;
      right: 1%;
    }
  `,
};

function Header() {
  const navigate = useNavigate();
  const onClickUndo = () => {
    navigate("/");
  };
  let Lo = window.location.href;
  return (
    <Style.Header>
      <Style.Logo>Can I Eat?</Style.Logo>
      <Style.Redo>
        {/* 선택 페이지나 결과 페이지에서만 Redo 버튼 활성화 */}
        {(Lo.includes("/select") ||
          Lo.includes("/result") ||
          Lo.includes("/search")) && <UndoOutlined onClick={onClickUndo} />}
      </Style.Redo>
    </Style.Header>
  );
}

export default Header;
