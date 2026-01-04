import { Typography } from "@mui/material";
import type { TGuest } from "../models";

export const Header = ({ guest }: { guest: TGuest }) => {
    let firstText= 'Дорогие '
    if(guest.isSingle==='m') firstText='Дорогой '
       if(guest.isSingle==='f') firstText='Дорогая '

    return (
        <div className="header" >
            <Typography sx={{
                fontFamily: 'CoFoRaffine',
                fontWeight: 900,
                fontStyle: 'Bold',
                fontSize: '64.25px',
                leadingTrim: 'none',
                lineHeight: '100%',
                letterSpacing: '0%',
                height: 72,
                zIndex: 1,
                position: 'relative',
            }}>Wedding day</Typography>
            <Typography sx={{
                fontFamily: 'CoFoRaffine',
                fontWeight: 400,
                lineHeight: '100%',
                zIndex: 1,
                position: 'relative',
                fontSize: '40px',
            }}>25.04.2026</Typography>
            <Typography sx={{
                fontFamily: 'CoFoRaffine',
                fontWeight: 300,
                zIndex: 1,
                position: 'relative',
                lineHeight: '100%',
                fontSize: '40px',
            }}>Михаил & Вероника</Typography>

            <Typography className='cofo500' sx={{
                fontSize: '40px',
                width: '270px',
                margin: '325px auto 0px auto'
            }}>{firstText + guest.names}
            </Typography>

            <Typography className='bad400' sx={{
                fontSize: '18px',
                width: 348,
                height: 174,
                margin: '28px auto 0 auto'
            }}>{'Наше самое важное путешествие – путешествие в семейную жизнь, начинается со дня нашей свадьбы. Будем рады, если Вы станете нашими попутчиками в этот особенный день – 25 апреля 2026 года.'}
            </Typography>
        </div>

    )
}