import React, { createContext, useState } from "react";
import { SelectContextType } from "components/common/types";

export const SelectContext = createContext<SelectContextType>({
  selectedList: [],
  setSelectedListHandler: (selectedList: string[]) => {},
});

function SelectContextProvider({ children }: { children: React.ReactNode }) {
  const [selectedList, setSelectedList] = useState<string[]>([]);

  function setSelectedListHandler(selectedItems: string[]) {
    setSelectedList(selectedItems);
  }
  return (
    <SelectContext.Provider value={{ selectedList, setSelectedListHandler }}>
      {children}
    </SelectContext.Provider>
  );
}

export default SelectContextProvider;
