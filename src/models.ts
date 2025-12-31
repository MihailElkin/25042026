export type TGuest = {
    id:number;
    names:string;
    isHasChild:boolean;
}
export type TAnswer = {
    id:number;
    isHasBeen:'Да'| 'Только ЗАГС' |'Только банкет'| 'Нет' |null;
    isChildHasBeen:'Да'|'Нет'|null;
    alcohol:string[];
    message:string;
}