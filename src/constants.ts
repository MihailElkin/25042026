import type { TGuest } from "./models";

export const guestsList: TGuest[] = [
  {
    id: 0,
    names: "Георгий и Наталия",
    isHasChild: false,
  },
  {
    id: 1,
    names: "Иван и Анна",
    isHasChild: false,
  },
  {
    id: 2,
    names: "Артем и Ольга",
    isHasChild: false,
  },
  {
    id: 3,
    names: "Андрей и Ксения",
    isHasChild: true,
  },
  {
    id: 4,
    names: "Кирилл и Ксения",
    isHasChild: false,
  },
  {
    id: 99,
    names: "Господин и Госпожа",
    isHasChild: true,
  },
];
export const alcoholList = [
  "Безалкагольные напитки",
  "Белое вино",
  "Красное вино",
  "Водка",
  "Коньяк",
  "Другое",
];

export const storageId = "25042026id";

export const errorText =
  "Что-то пошло не так, попробуйте еще раз или свяжитесь с нами!";

export const successText = "Ваша анкета успено отправлена!";
