import { Button, Typography } from "@mui/material";

export const Footer = ({ onSubmit }: { onSubmit: ()=>void }) => {

    return (
        <div className="footer" >
            <Typography className='cofo500' sx={{
                fontSize: '32px',
                width: '395px',
                margin: '125px auto 0px auto'
            }}>Спасибо, что поделились с нами важными деталями!
            </Typography>

            <Typography className='bad400' sx={{
                fontSize: '18px',
                width: 348,
                margin: '28px auto 0 auto'
            }}>Нажмите на волшебную кнопку — и ваши ответы сразу окажутся у нас.</Typography>

      <Button onClick={onSubmit} variant='outlined' className="cofo500" sx={{ marginTop:'25px', fontSize: "30px", color: 'black', textTransform: 'none', borderColor: 'black' }}><span>Отправить</span> 
      <span style={{color:'red'}}>♥
        </span></Button>

      <Typography className='bad400' sx={{
                fontSize: '18px',
                width: 348,
                height: 174,
                margin: '128px auto 0 auto'
            }}>С любовью, Михаил и Вероника</Typography>
        </div>

    )
}