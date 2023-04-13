import React from "react";
import Header from "../layout/Header/Header";
import Main from "../components/main/Main";
import PageTemplate from "../layout/PageTemplate";
function MainPage() {
  return <PageTemplate content={<Main />} />;
}

export default MainPage;
