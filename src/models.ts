export type TGuest = {
    id:number;
    names:string;
    isHasChild:boolean;
}
export type TAnswer = {
    id:number;
    isHasBeen:boolean|null;
    isChildHasBeen:boolean|null;
    alcohol:string[];
    message:string;
}