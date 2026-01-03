import { Typography } from "@mui/material"
import rings from '../assets/img/8e392cdf9e1efafc837e1589339bd83d31992961.png'

export const RegistrInfo = ()=>{
    return(
        <div className="card" style={{width:'395px', height:'270px', padding:'34px 38px'}}>
            <img src={rings} width='162px' style={{position:'absolute', margin:'25px 0px 0px 173px'}}/>
            <Typography sx={{
                fontFamily: 'CoFoRaffine',
fontWeight: 500,
zIndex:1,
position:'relative',
lineHeight: '100%',
fontSize: '40px',
            }}>Торжественная регистрация</Typography>
                      <Typography sx={{
                fontFamily: 'CoFoRaffine',
fontWeight: 500,
zIndex:1,
position:'relative',
lineHeight: '100%',
fontSize: '40px',
            }}>15 :00</Typography>

<Typography sx={{fontFamily: 'BadScript',
fontWeight: 400,
zIndex:1,
fontStyle:'italic',
position:'relative',
lineHeight: '100%',
fontSize: '18px',
width:319
}}>{'ЗАГС Ленинского Района г. Екатеринбург, ул. Сакко и Ванцетти, 105/1'}</Typography>
        </div>
    )
}