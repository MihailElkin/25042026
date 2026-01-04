export type TGuest = {
  id: number;
  names: string;
  isHasChild: boolean;
  isSingle?: "m" | "f";
};
export type TAnswer = {
  id: number;
  names: string;
  isHasBeen: "Да" | "Только ЗАГС" | "Только банкет" | "Нет" | null;
  isChildHasBeen: "Да" | "Нет" | null;
  alcohol: string[];
  message: string;
};
