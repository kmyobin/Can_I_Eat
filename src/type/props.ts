import {SearchResult} from "./data";

export type SearchFormProps = {
    handleSearchResultsChange: (newSearchResults: SearchResult[]) => void;
    handleIsLoadingToggle: () => void;
};
export type SearchListProps = {
    isLoading: boolean;
    searchResults: SearchResult[]
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
}