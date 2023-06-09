import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { intro } from "assets/fixtures/intro";
import MyButton from "components/common/StartButton";
import { useNavigate } from "react-router-dom";

const Style = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  TextArea: styled.div`
    font-family: NotoSansKR-500;
    font-size: 36px;
    line-height: 50px;
    text-align: center;
    margin: 40px 0px;
    margin-bottom: 150px;
    @media only screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 60px;
      margin-bottom: 150px;
    }
  `,
  ButtonArea: styled.div`
    position: fixed;
    bottom: 95px;
    @media only screen and (max-width: 768px) {
      bottom: 155px;
    }
  `,
};

function MainContent() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % intro.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const text = "먹어도 될까 . . . ?";
  const [movingText, setMovingText] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setMovingText(text.substring(0, count + 1)); // 이전 문자 + 다음 문자
      setCount(count + 1); // 개수만큼 count
    }, 70);

    if (count === text.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    setCount(0);
    setMovingText("");
  }, [currentIndex]);

  return (
    <Style.Wrapper>
      <Style.TextArea>
        나는 {intro[currentIndex].name}인데
        <br />
        <span style={{ color: "#999999", fontFamily: "NotoSansKR-400" }}>
          {intro[currentIndex].food}
        </span>
        <br />
        {movingText}
      </Style.TextArea>
      <Style.ButtonArea onClick={() => navigate("/select")}>
        <MyButton text="시작 ✅" />
      </Style.ButtonArea>
    </Style.Wrapper>
  );
}

export default MainContent;
