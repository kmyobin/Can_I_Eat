import { SelectItem } from "components/select/types";

export type SelectButtonProps = { text?: string; selectList: SelectItem[] };
export type SelectContextType = {
  selectedList: string[];
  setSelectedListHandler: (selectedList: string[]) => void;
};
export type StartButtonProps = {
  text: string;
};
