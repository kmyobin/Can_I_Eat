import React, { createContext, useState } from "react";
import { AppContextType } from "types/data";
import {SearchResult} from "types/data";

export const AppContext = createContext<AppContextType>({
  selectedList: [],
  setSelectedListHandler: (selectedList: string[]) => {},
  searchResults: [],
  handleSearchResultsChange : (newSearchResults: SearchResult[]) => {},
});

function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [selectedList, setSelectedList] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  function handleSearchResultsChange(newSearchResults: SearchResult[]) {
    setSearchResults(newSearchResults);
  }
  function setSelectedListHandler(selectedItems: string[]) {
    setSelectedList(selectedItems);
  }
  return (
    <AppContext.Provider value={{
      selectedList,
      setSelectedListHandler,
      searchResults,
      handleSearchResultsChange
    }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
