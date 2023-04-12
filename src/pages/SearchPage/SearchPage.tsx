import React from "react";
import PageTemplate from "../../layout/PageTemplate";
import SearchContent from "./SearchContent";

function SearchPage() {
    return (
        <>
            <PageTemplate content={<SearchContent/>}/>
        </>
    );
}

export default SearchPage;
