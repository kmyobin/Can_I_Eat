import React, { useEffect, useState, useCallback, useRef } from "react";
import styled from "styled-components";
import { intro } from "../../assets/intro";
import MyButton from "../common/MyButton";

const Style = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    //justify-content: space-between;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `,
  TextArea: styled.div`
    //margin: 0 auto;
    font-family: NotoSansKR-700;
    font-size: 1.2rem;
    text-align: center;
    margin: 40px 0px;
  `,
  ButtonArea: styled.div`
    //width: 100%;
  `,
};

interface Intro {
  name: string;
  food: string;
}
function Main() {
  const [currentIntro, setCurrentIntro] = useState<Intro[]>(intro);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % currentIntro.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, currentIntro]);

  const text = "먹어도 될까 . . . ?";
  const [Text, setText] = useState("");
  const [Count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setText(text.substring(0, Count + 1)); // 이전 문자 + 다음 문자
      setCount(Count + 1); // 개수만큼 count
    }, 70);

    if (Count === text.length) {
      //setCount(0); // Count를 0으로 설정하여 초기화
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [text, Count]);

  useEffect(() => {
    setCount(0);
    setText("");
  }, [currentIndex]);

  return (
    <Style.Wrapper>
      <Style.TextArea>
        나는 {currentIntro[currentIndex].name}인데
        <br />
        <span style={{ color: "#999999" }}>
          {currentIntro[currentIndex].food}
        </span>
        <br />
        {Text}
      </Style.TextArea>
      <Style.ButtonArea>
        <MyButton text="시작 ✅" />
      </Style.ButtonArea>
    </Style.Wrapper>
  );
}

export default Main;
