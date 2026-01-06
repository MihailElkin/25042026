
import { alcoholList } from "../constants";
import { Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";



export const Alcohol = ({ alcohol, setAlcohol }: { alcohol: string[]; setAlcohol: (param: string[]) => void }) => {
  const [other, setOther] = useState('')
  const isShowOther = !!alcohol.filter((f) => f.includes('Другое')).length
  const onChange = (value: string, checked: boolean) => {
    if (checked) {
      setAlcohol([...alcohol, value])
    } else {
      setAlcohol(alcohol.filter((f) => !f.includes(value)))
    }

  }
  const onChangeOther = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setOther(event.target.value)
  }
  const onSubmitOther = () => {
    setAlcohol([...alcohol.filter((f) => !f.includes('Другое')), `Другое: ${other}`])
  }

  return (<div className="card" style={{ width: '92%', transition: '0.5s cubic-bezier(0.7, 0.01, 0.15, 0.99)', height: isShowOther ? '688px' : '613px' }}>
    <Typography style={{ fontSize: '29px', width: '350px',whiteSpace:'pre-wrap' }} className="cofo500">{'Предпочтения по напиткам\n(можно выбрать несколько)'}</Typography>
    <div style={{ width: '100%', height: '0px', border: '0.5px solid black', margin:'35px 0px' }} />
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '30px'
    }}>
      {alcoholList.map((v) => {
        const onCheck = (_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
          onChange(v, checked)
        }
        return (
          <FormControlLabel
            label={v}
            control={<Checkbox onChange={onCheck} />}
          />
        )
      })}
    </div>

    {isShowOther ?
      <div style={{ display: 'flex', gap: '10px', visibility: isShowOther ? 'visible' : 'hidden', opacity: Number(isShowOther) }}>
        <TextField
          onChange={onChangeOther}
          value={other}
        />
        <Button variant='outlined' sx={{ color: 'black', textTransform: 'none', borderColor: 'black' }} onClick={onSubmitOther}>Ок</Button>
      </div> : null
    }
  </div>
  )
}