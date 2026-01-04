import { Typography, RadioGroup, FormControlLabel, Radio } from "@mui/material"
import type { TAnswer } from "../models"

export const ChildHasBeen = ({ hasBeen, setHasBeen }: { hasBeen: TAnswer['isChildHasBeen'], setHasBeen: (param: TAnswer['isChildHasBeen']) => void }) => {

  const handleChange = (_: React.ChangeEvent<HTMLInputElement>, value: string) => {
    setHasBeen(value as TAnswer['isChildHasBeen'])
  }

  return (<div className="card" style={{ width: '395px', height: '321px' }}>
    <Typography style={{ fontSize: '29px', padding: '32px 10px' }} className="cofo500">Будут ли
      с вами дети?</Typography>
    <div style={{ width: '100%', height: '0px', border: '1px solid black' }} />
    <RadioGroup
      name="controlled-radio-buttons-group"
      value={hasBeen}
      onChange={handleChange}
      style={{ gap: '25px', width:'71%' }}
    >
      <FormControlLabel value="Да" control={<Radio />} label="Да" />
      <FormControlLabel value="Нет" control={<Radio />} label="Нет" />
    </RadioGroup>
  </div>
  )
}