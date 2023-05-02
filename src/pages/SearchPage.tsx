import React from "react";
import PageTemplate from "../layout/PageTemplate";
import SearchContent from "../components/search/SearchContent";
import {SearchPageProps} from "../type/props";

function SearchPage() {
    return (
            <PageTemplate content={
                <SearchContent/>}/>
    );
}

export default SearchPage;
