import React from "react";

interface SelectItem {
  id: number;
  name: string;
  src: string;
  alt: string;
}

interface SelectList {
  selectList?: SelectItem[];
}

function SelectContainer({ selectList }: SelectList) {
  return <div>이 곳은 선택된 컨테이너</div>;
}

export default SelectContainer;
