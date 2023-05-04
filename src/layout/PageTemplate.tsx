import React from "react";
import Header from "layout/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
`;

const Content = styled.div`
  height: calc(100vh - 80px);
  max-width: 1280px; // width -> max-width
  //background-color: #000000; // content 위치 확인용
  margin: 0 auto; // content 가운데 정렬
  @media only screen and (max-width: 768px) {
    height: calc(100vh - 50px);
    width: 100%; // 폰은 화면 크기 구성이 다양하고 화면의 모든 부분을 다 써도 될 것 같아서 100%로 설정했습니다
  }
`;

type PageTemplateType = {
  content: JSX.Element;
};

function PageTemplate({ content }: PageTemplateType) {
  return (
    <Wrapper>
      <Header />
      <Content>{content}</Content>
    </Wrapper>
  );
}

export default PageTemplate;
