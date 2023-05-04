import { SelectItem } from "components/select/types";
import {SearchResult} from "type/data";

export type SelectButtonProps = { text?: string; selectList: SelectItem[] };
export type AppContextType = {
  selectedList: string[];
  setSelectedListHandler: (selectedList: string[]) => void;
  searchResults: SearchResult[];
  handleSearchResultsChange : (newSearchResults: SearchResult[]) => void;
};
export type StartButtonProps = {
  text: string;
};
