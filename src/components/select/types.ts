export type SelectItem = {
  id: number;
  name: string;
  src: string;
  alt: string;
  types: string[];
};

export type SelectListProps = {
  selectList: SelectItem[]; // 선택된 리스트
  setSelectList: (selectList: SelectItem[]) => void | undefined;
  selectArray?: SelectItem[]; // 기존 22개의 리스트
};

export type GridCardsProps = {
  selectItem: SelectItem;
  selectList: SelectItem[]; // 선택된 리스트
  setSelectList: (selectList: SelectItem[]) => void | undefined;
};

export type ImageWrapperProps = {
  click: boolean;
};
