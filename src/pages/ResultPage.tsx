import React from "react";
import PageTemplate from "../layout/PageTemplate";
import ResultContent from "../components/result/ResultContet";

function ResultPage() {
    return (
        <PageTemplate content={<ResultContent/>}/>
    );
}

export default ResultPage;
