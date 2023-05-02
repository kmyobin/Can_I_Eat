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
