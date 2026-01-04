import { Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material"
import type { TAnswer } from "../models"

export const HasBeen = ({ hasBeen, setHasBeen }: { hasBeen: TAnswer['isHasBeen'], setHasBeen: (param: TAnswer['isHasBeen']) => void }) => {

  const handleChange = (_: React.ChangeEvent<HTMLInputElement>, value: string) => {
    setHasBeen(value as TAnswer['isHasBeen'])
  }

  return (<div className="card" style={{ width: '395px', height: '466px' }}>
    <Typography style={{ fontSize: '29px', padding: '32px 10px'}} className="cofo500">Сможете ли вы разделить
      с нами радость этого дня?</Typography>
      <div style={{ width: '100%', height: '0px', border: '1px solid black' }} />
      <RadioGroup
        name="controlled-radio-buttons-group"
        value={hasBeen}
        onChange={handleChange}
        style={{gap:'25px'}}
      >
        <FormControlLabel value="Да" control={<Radio />} label="Да, в ЗАГСе и на банкете" />
        <FormControlLabel value="Только ЗАГС" control={<Radio />} label="Только на церемонии в ЗАГСе" />
        <FormControlLabel value="Только банкет" control={<Radio />} label="Только на банкете" />
        <FormControlLabel value="Нет" control={<Radio />} label="К сожалению, нет " />
      </RadioGroup>
  </div>
  )
}