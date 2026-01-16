import { Typography } from "@mui/material"
import mic from '../assets/img/ыыыыыы 1.png'

export const ValeraInfo = () => {
    return (
        <div style={{ width: '92%', height: 'fit-content', padding: '35px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
            <img src={mic} width='121px' style={{ position: 'absolute', margin: '176px 270px 0px 0px' }} />
            <Typography className="cofo500" sx={{
                fontSize: '32px',
                whiteSpace: 'pre-wrap',
            }}>{'Если вы планируете\nтворческое поздравленние\nс видео или музыкой'}</Typography>

            <Typography className='bad400' sx={{
                fontSize: '18px',
                whiteSpace: 'pre-wrap',
                width: 319,
                marginTop:'20px',
            }}>{'Сообщите, пожалуйста, нашему ведущему Валерию – он поможет решить\nтехнические вопросы.'}</Typography>

            <Typography className='bad400' sx={{
                fontSize: '18px',
                width: 319,
            }}><a href={'https://t.me/valmaxevent'}>+7 (912) 686-12-46</a></Typography>
        </div>
    )
}