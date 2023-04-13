type SearchResult = {
    BSSH_NM : string;
    LCNS_NO : string;
    PRDLST_DCNM : string;
    PRDLST_NM : string;
    PRDLST_REPORT_NO : string;
    PRMS_DT : string;
    RAWMTRL_NM: string;
}
type SearchFormProps = {
    searchKeyword: string
    handleSearchKeywordChange: (newSearchKeyword: string) => void;
    handleSearchResultsChange: (newSearchResults: SearchResult[]) => void;
}
type SearchListProps = {
    searchResults: SearchResult[]
}