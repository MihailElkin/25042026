import { Typography } from "@mui/material"
import rings from '../assets/img/8e392cdf9e1efafc837e1589339bd83d31992961.png'

export const RegistrInfo = () => {
    return (
        <div className="card" style={{ width: '92%', height: '200px',}}>
            <img src={rings} width='162px' style={{ position: 'absolute', margin: '-26px 0px 0px 236px' }} />
            <Typography className="cofo500" sx={{
                fontSize: '40px',
            }}>Торжественная регистрация</Typography>
            <Typography className="cofo500" sx={{
                fontSize: '40px',
            }}>15 :00</Typography>

            <Typography className='bad400' sx={{
                fontSize: '18px',
                width: 319
            }}>{'ЗАГС Ленинского Района г. Екатеринбург, ул. Сакко и Ванцетти, 105/1'}</Typography>
        </div>
    )
}