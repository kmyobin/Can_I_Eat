import {rawMaterial, SearchResult} from "./data";

export type SearchFormProps = {
    handleIsLoadingToggle: () => void;
};
export type SearchListProps = {
    isLoading: boolean;
};
export type SearchItemProps = {
    id: string;
    name : string;
    imgUrl: string;
    company: string;
};
export type SearchScrollBoxProps = {
    isResultExists: boolean;
};
export type SearchPageProps = {
    searchResults : SearchResult[];
    handleSearchResultsChange: (newSearchResults: SearchResult[]) => void;
}
export type SearchContentProps = {
    searchResults : SearchResult[];
    handleSearchResultsChange: (newSearchResults: SearchResult[]) => void;
}
export type ResultPageProps = {
    searchResults : SearchResult[];
    handleSearchResultsChange: (newSearchResults: SearchResult[]) => void;
}
export type ResultContentProps = {
    searchResults : SearchResult[];
    handleSearchResultsChange: (newSearchResults: SearchResult[]) => void;
}
export type ResultCardProps = {
    selectedFood : SearchResult;
    rawMaterials : rawMaterial[];
}
export type ResultCardJudgeProps = {
    isPossible : boolean;
}
export type ResultKeywordBoxProps = {
    rawMaterials : rawMaterial[];
}
export type ResultChipListProps = {
    rawMaterials : rawMaterial[];
}
export type ResultChipItemProps = {
    isMatched : boolean;
}
