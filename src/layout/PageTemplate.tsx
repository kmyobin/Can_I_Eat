import React from "react";
import Header from "../layout/Header/Header";
import styled from "styled-components";

const Wrapper = styled.div`
  
`;
const Content = styled.div`
  height: calc(100vh - 80px);

  @media only screen and (max-width: 768px) {
    height: calc(100vh - 50px);
  }
`;

type PageTemplateType = {
    content : JSX.Element
}

function PageTemplate({content}: PageTemplateType) {
    return (
        <Wrapper>
            <Header/>
            <Content>
                {content}
            </Content>
        </Wrapper>
    );
}

export default PageTemplate;
