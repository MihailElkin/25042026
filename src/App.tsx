import { useState } from 'react'
import './App.css'
import { guestsList } from './constants'
import { HasBeen } from './components/HasBeen';
import type { TAnswer } from './models';
import { Button } from '@mui/material';
import { sendData } from './utils/sendData';

function App() {

console.log( document.location.search)

const id = Number(document.location.search.replace('?id=',''))
  const [answer, setAnswer] = useState<TAnswer>({
    id:id,
    isHasBeen: null,
    isChildHasBeen: null,
    alcohol:[],
    message: '',
});

  const setHasBeen = (param:TAnswer['isHasBeen']) => {
    setAnswer((prev)=>({...prev, isHasBeen:param}));
  };
  const send = ()=>{
    sendData(answer)
  }

  return (
    <div>
      <h1>{'Дорогие '+guestsList[id].names}</h1>
<HasBeen setHasBeen={setHasBeen} hasBeen={answer.isHasBeen}/>
<Button onClick={send}>отправить</Button>
    </div>
  )
}

export default App
