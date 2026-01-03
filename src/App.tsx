import { useState } from 'react'
import './App.css'
import { guestsList, storageId } from './constants'
import { HasBeen } from './components/HasBeen';
import type { TAnswer } from './models';
import { Button, TextareaAutosize, Typography } from '@mui/material';
import { sendData } from './utils/sendData';
import { ChildHasBeen } from './components/ChildHasBeen';
import { Alcohol } from './components/Alcohol';
import { Header } from './components/Header';
import { RegistrInfo } from './components/RegistrInfo';
import { RestInfo } from './components/RestInfo';



function App() {

console.log( document.location.search)

let id = Number(document.location.search.replace('?id=',''))
let guest
if(id===99){
  localStorage.clear()
   guest = guestsList.find((f)=>f.id===id)
}
else {
const pastId = localStorage.getItem(storageId)
if(pastId && Number(window.atob(pastId))!==id) {
  alert('жулик') 
  id=Number(window.atob(pastId))
} 
guest = guestsList.find((f)=>f.id===id)
if(!pastId && guest)  localStorage.setItem(storageId,window.btoa(String(id)))
}

if(!guest) alert('чтото пошло не так, напиши нам')


  
 

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
    const setChildHasBeen = (param:TAnswer['isChildHasBeen']) => {
    setAnswer((prev)=>({...prev, isChildHasBeen:param}));
  };
      const setAlcohol = (param:TAnswer['alcohol']) => {
    setAnswer((prev)=>({...prev, alcohol:param}));
  };
const setMesage = (event: React.ChangeEvent<HTMLTextAreaElement>)=>{
    setAnswer((prev)=>({...prev, message:event.target.value}));
}

  const send = ()=>{
    sendData(answer)
  }
  if(!guest)return

  return (
    <div>
      <Header guest={guest}/>
      <RegistrInfo/>
      <RestInfo/>
<HasBeen setHasBeen={setHasBeen} hasBeen={answer.isHasBeen}/>
{guest?.isHasChild?<ChildHasBeen setHasBeen={setChildHasBeen} hasBeen={answer.isChildHasBeen}/>:null
}
<Alcohol alcohol={answer.alcohol} setAlcohol={setAlcohol} />

<Typography>сообщение</Typography>
<TextareaAutosize minRows={1} maxRows={5} maxLength={500} onChange={setMesage}/>

<Button onClick={send}>отправить</Button>
    </div>
  )
}

export default App
