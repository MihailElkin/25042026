import { Typography } from "@mui/material"
import mic from '../assets/img/ыыыыыы 1.png'

export const ValeraInfo = () => {
    return (
        <div style={{ width: '92%', height: 'fit-content', padding: '35px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
            <img src={mic} width='121px' style={{ position: 'absolute', margin: '-228px 0px 0px 272px' }} />
            <Typography className="cofo500" sx={{
                fontSize: '32px',
            }}>Для нас будет </Typography><Typography className="cofo500" sx={{
                fontSize: '32px',
            }}>большой радостью </Typography><Typography className="cofo500" sx={{
                fontSize: '32px',
            }}>получить от Вас творческое </Typography><Typography className="cofo500" sx={{
                fontSize: '32px',
            }}>поздравление!</Typography>

            <Typography className='bad400' sx={{
                fontSize: '18px',
                width: 319,
                marginTop:'20px',
            }}>Чтобы всё прошло гладко, сообщите, пожалуйста, нашему ведущему Валерию – он поможет решить технические вопросы.</Typography>

            <Typography className='bad400' sx={{
                fontSize: '18px',
                width: 319
            }}><a href={'https://t.me/valmaxevent'}>+7 (912) 686-12-46</a></Typography>
        </div>
    )
}