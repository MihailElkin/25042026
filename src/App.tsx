import { useState } from 'react'
import './App.css'
import { errorText, guestsList, storageId, successText } from './constants'
import { HasBeen } from './components/HasBeen';
import type { TAnswer } from './models';
import { Alert, createTheme, ThemeProvider, Typography } from '@mui/material';
import { sendData } from './utils/sendData';
import { ChildHasBeen } from './components/ChildHasBeen';
import { Alcohol } from './components/Alcohol';
import { Header } from './components/Header';
import { RegistrInfo } from './components/RegistrInfo';
import { RestInfo } from './components/RestInfo';
import { ValeraInfo } from './components/ValeraInfo';
import { Message } from './components/Message';
import { Footer } from './components/Footer';



function App() {
  const [sendState, setSendState] = useState<boolean | null>(null)

  const theme = createTheme({
    typography: {
      fontFamily: "BadScript",
      fontSize: 18,
    },
  });

  console.log(document.location.search)

  let id = Number(document.location.search.replace('?id=', ''))
  let guest
  if (id === 99) {
    localStorage.clear()
    guest = guestsList.find((f) => f.id === id)
  }
  else {
    const pastId = localStorage.getItem(storageId)
    if (pastId && Number(window.atob(pastId)) !== id) {
      alert('жулик')
      id = Number(window.atob(pastId))
    }
    guest = guestsList.find((f) => f.id === id)
    if (!pastId && guest) localStorage.setItem(storageId, window.btoa(String(id)))
  }

  if (!guest) alert('чтото пошло не так, напиши нам')





  const [answer, setAnswer] = useState<TAnswer>({
    id: id,
    isHasBeen: null,
    isChildHasBeen: null,
    alcohol: [],
    message: '',
  });




  const setHasBeen = (param: TAnswer['isHasBeen']) => {
    setAnswer((prev) => ({ ...prev, isHasBeen: param }));
  };
  const setChildHasBeen = (param: TAnswer['isChildHasBeen']) => {
    setAnswer((prev) => ({ ...prev, isChildHasBeen: param }));
  };
  const setAlcohol = (param: TAnswer['alcohol']) => {
    console.log(param)
    setAnswer((prev) => ({ ...prev, alcohol: param }));
  };
  const setMessage = (param: string) => {
    setAnswer((prev) => ({ ...prev, message: param }));
  }

  const send = async () => {
    setSendState(await sendData(answer))
  }
  if (!guest) return

  return (
    <div className='root'>
      {sendState !== null ? (<Alert severity={sendState ? "success" : 'error'} sx={{
        position: 'sticky',
        top: '10px',
        zIndex: 500
      }}>
        {sendState ? successText : errorText}
      </Alert>) : null}

      <Header guest={guest} />
      <RegistrInfo />
      <RestInfo />
      <Typography className='cofo500' style={{ fontSize: 40 }}>Анкета</Typography>
      <Typography className='bad400' style={{ fontSize: 18, width: '369px' }}>Для того чтобы наш праздник стал по-настоящему тёплым, комфортным и запоминающимся для каждого, нам очень важно знать ваши планы. Пожалуйста, уделите несколько минут, чтобы заполнить короткую анкету.
      </Typography>
      <Typography className='bad400' style={{ fontSize: 18, width: '369px' }}>Для нашего спокойного планирования, пожалуйста, отправьте анкету до 15 марта 2026 года.</Typography>

      <ThemeProvider theme={theme}>
        <HasBeen setHasBeen={setHasBeen} hasBeen={answer.isHasBeen} />
        <Alcohol alcohol={answer.alcohol} setAlcohol={setAlcohol} />
        {guest?.isHasChild ? <ChildHasBeen setHasBeen={setChildHasBeen} hasBeen={answer.isChildHasBeen} /> : null
        }
      </ThemeProvider>

      <ValeraInfo />
      <Message setMessage={setMessage} />
      <Footer onSubmit={send} />
    </div>
  )
}

export default App
