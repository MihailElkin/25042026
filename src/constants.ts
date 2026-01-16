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
    id: 5,
    names: "Игорь и Регина",
    isHasChild: false,
  },
  {
    id: 6,
    names: "Виктория",
    isHasChild: false,
    isSingle: "f",
  },
  {
    id: 7,
    names: "Степен и Анастасия",
    isHasChild: false,
  },
  {
    id: 8,
    names: "Максим и Александра",
    isHasChild: true,
  },
  {
    id: 9,
    names: "Марина",
    isHasChild: false,
    isSingle: "f",
  },
  {
    id: 10,
    names: "Аркадий",
    isHasChild: false,
    isSingle: "m",
  },
  {
    id: 11,
    names: "Юрий и Вероника",
    isHasChild: false,
  },
  {
    id: 12,
    names: "Нейтрино и Елена",
    isHasChild: false,
  },
  {
    id: 13,
    names: "Дмитрий и Наталья",
    isHasChild: false,
  },
  {
    id: 14,
    names: "Роман",
    isHasChild: false,
    isSingle: "m",
  },
  {
    id: 15,
    names: "Даниил и Марина",
    isHasChild: false,
  },
  {
    id: 16,
    names: "Денис и Юлия",
    isHasChild: true,
  },
  {
    id: 17,
    names: "Светлана",
    isHasChild: false,
    isSingle: "f",
  },
  {
    id: 18,
    names: "Сергей и Наталья",
    isHasChild: false,
  },
  {
    id: 19,
    names: "Сергей и Полина",
    isHasChild: false,
  },
  {
    id: 20,
    names: "Дарья",
    isHasChild: false,
    isSingle: "f",
  },
  {
    id: 21,
    names: "Яков и Ирина",
    isHasChild: false,
  },
  {
    id: 22,
    names: "Евгений и Кристина",
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
