import { Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material"
import type { TAnswer } from "../models"

export const HasBeen = ({ hasBeen, setHasBeen }: { hasBeen: TAnswer['isHasBeen'], setHasBeen: (param: TAnswer['isHasBeen']) => void }) => {

  const handleChange = (_: React.ChangeEvent<HTMLInputElement>, value: string) => {
    setHasBeen(value as TAnswer['isHasBeen'])
  }

  return (<div className="card" style={{ width: '92%' }}>
    <Typography style={{ fontSize: '29px'}} className="cofo500">Сможете ли вы разделить
      с нами радость этого дня?</Typography>
      <div style={{ width: '100%', height: '0px', border: '0.5px solid black', margin:'35px 0px' }} />
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