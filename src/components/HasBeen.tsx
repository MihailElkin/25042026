import {  ToggleButtonGroup, ToggleButton, Typography } from "@mui/material"
import type { TAnswer } from "../models"

export const HasBeen = ({hasBeen, setHasBeen}:{hasBeen:TAnswer['isHasBeen'], setHasBeen:(param:TAnswer['isHasBeen'])=>void})=>{
    const handleChange=(_: React.MouseEvent<HTMLElement, MouseEvent>, value: TAnswer['isHasBeen'])=>{
console.log(value)
setHasBeen(value)
    }

    return(<>     
      <Typography>придешь?</Typography>
<ToggleButtonGroup
  color="primary"
  exclusive
  value={hasBeen}
  onChange={handleChange}
  aria-label="Platform"
>
  <ToggleButton value="Да">Да</ToggleButton>
  <ToggleButton value="Только ЗАГС">Только ЗАГС</ToggleButton>
  <ToggleButton value="Только банкет">Только банкет</ToggleButton>
  <ToggleButton value="Нет">Нет</ToggleButton>
</ToggleButtonGroup></>
)
}