import { rawMaterial, SearchResult, SelectItem } from "./data";

export type ImageWrapperProps = {
  click: boolean;
};
export type GridCardsProps = {
  selectItem: SelectItem;
  selectList: SelectItem[]; // 선택된 리스트
  setSelectList: (selectList: SelectItem[]) => void | undefined;
};
export type SelectListProps = {
  selectList: SelectItem[]; // 선택된 리스트
  setSelectList: (selectList: SelectItem[]) => void | undefined;
  selectArray?: SelectItem[]; // 기존 22개의 리스트
};
export type StartButtonProps = {
  text: string;
};
export type SelectButtonProps = {
  text?: string;
  selectlist: SelectItem[];
};
export type SearchFormProps = {
  handleIsLoadingToggle: () => void;
};
export type SearchListProps = {
  isLoading: boolean;
};
export type SearchItemProps = {
  id: string;
  name: string;
  imgUrl: string;
  company: string;
};
export type SearchScrollBoxProps = {
  isResultExists: boolean;
};
export type ResultCardProps = {
  selectedFood: SearchResult;
  rawMaterials: rawMaterial[];
};
export type ResultCardJudgeProps = {
  isPossible: boolean;
};
export type ResultKeywordBoxProps = {
  rawMaterials: rawMaterial[];
};
export type ResultChipListProps = {
  rawMaterials: rawMaterial[];
};
export type ResultChipItemProps = {
  isMatched: boolean;
};
