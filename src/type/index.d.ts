type SearchResult = {
    BSSH_NM : string;
    LCNS_NO : string;
    PRDLST_DCNM : string;
    PRDLST_NM : string;
    PRDLST_REPORT_NO : string;
    PRMS_DT : string;
    RAWMTRL_NM: string;
    IMG_URL: string;
};
type SearchFormProps = {
    searchKeyword: string;
    handleSearchKeywordChange: (newSearchKeyword: string) => void;
    handleSearchResultsChange: (newSearchResults: SearchResult[]) => void;
    handleIsLoadingToggle: () => void;
};
type SearchListProps = {
    isLoading: boolean;
    searchResults: SearchResult[]
};
type SearchItemProps = {
    id: string;
    name : string;
    imgUrl: string;
    company: string;
};
type SearchScrollBoxProps = {
    isResultExists: boolean;
};