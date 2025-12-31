import {  ToggleButtonGroup, ToggleButton, Typography } from "@mui/material"
import type { TAnswer } from "../models"

export const ChildHasBeen = ({hasBeen, setHasBeen}:{hasBeen:TAnswer['isChildHasBeen'], setHasBeen:(param:TAnswer['isChildHasBeen'])=>void})=>{
    const handleChange=(_: React.MouseEvent<HTMLElement, MouseEvent>, value: TAnswer['isChildHasBeen'])=>{
console.log(value)
setHasBeen(value)
    }

    return(<>     
      <Typography>с ребенком?</Typography>
<ToggleButtonGroup
  color="primary"
  exclusive
  value={hasBeen}
  onChange={handleChange}
  aria-label="Platform"
>
  <ToggleButton value="Да">Да</ToggleButton>
  <ToggleButton value="Нет">Нет</ToggleButton>
</ToggleButtonGroup></>
)
}