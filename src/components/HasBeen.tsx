import {  ToggleButtonGroup, ToggleButton, Typography } from "@mui/material"

export const HasBeen = ({hasBeen, setHasBeen}:{hasBeen:boolean|null, setHasBeen:(param:boolean)=>void})=>{
    const handleChange=(_: React.MouseEvent<HTMLElement, MouseEvent>, value: string)=>{
console.log(value)
setHasBeen(value==='да')
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
  <ToggleButton value="да">да</ToggleButton>
  <ToggleButton value="нет">нет</ToggleButton>
</ToggleButtonGroup></>
)
}