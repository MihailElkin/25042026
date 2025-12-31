
import Select, { type ActionMeta, type MultiValue } from "react-select";
import { alcoholList } from "../constants";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const Alcohol = ({alcohol, setAlcohol}:{alcohol:string[]; setAlcohol:(param:string[])=>void})=>{
const [other, setOther]=useState('')
    const onChange = (newValue: MultiValue<string>, actionMeta: ActionMeta<string>)=>{
console.log(newValue, actionMeta)
setAlcohol(newValue.map((v)=>v.value))
}
const onChangeOther = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setOther(event.target.value)
}
const onSubmitOther = ()=>{
    setAlcohol([...alcohol,other])
}

    return(<> <Select
isSearchable={false}

  closeMenuOnSelect={false}
    isMulti
    options={alcoholList.map((v)=>({value:v, label:v}))}
    value={alcohol.map((v)=>({value:v, label:v}))}
    onChange={onChange}
  />
  {alcohol.includes('Другое')?
<>
    <Typography>Уточни, что</Typography>
    <TextField
    onChange={onChangeOther}
    value={other}
    />
    <Button onClick={onSubmitOther}>Ок</Button>
</>  :null

}
  
  </>
 
    )
}