import { Container, Typography } from "@mui/material";
import type { TGuest } from "../models";
import pic from '../assets/img/c83bbe3c68fc9a80559b4b60f970ebb8f48ba46b.png'; 

export const Header = ({guest}:{guest:TGuest})=>{

    return(
<div className="header" >
<Typography sx={{fontFamily: 'CoFoRaffine',
fontWeight: 900,
fontStyle: 'Bold',
fontSize: '64.25px',
leadingTrim: 'none',
lineHeight: '100%',
letterSpacing: '0%',
height: 72,
zIndex:1,
position:'relative',
}}>Wedding day</Typography>
<Typography sx={{fontFamily: 'CoFoRaffine',
fontWeight: 400,
lineHeight: '100%',
zIndex:1,
position:'relative',
fontSize: '40px',}}>25.04.2026</Typography>
<Typography sx={{fontFamily: 'CoFoRaffine',
fontWeight: 300,
zIndex:1,
position:'relative',
lineHeight: '100%',
fontSize: '40px',}}>Михаил & Вероника</Typography>


<Typography sx={{fontFamily: 'CoFoRaffine',
fontWeight: 500,
zIndex:1,
position:'relative',
lineHeight: '100%',
fontSize: '40px',
top:'600px'
}}>{'Дорогие '+guest.names}
</Typography>

<Typography sx={{fontFamily: 'BadScript',
fontWeight: 400,
zIndex:1,
fontStyle:'italic',
position:'relative',
lineHeight: '100%',
fontSize: '18px',
top:'600px',
width: 348,
height: 174,
margin:'28px auto 0 auto'
}}>{'Наше самое важное путешествие – путешествие в семейную жизнь, начинается со дня нашей свадьбы. Будем рады, если Вы станете нашими попутчиками в этот особенный день – 25 апреля 2026 года.'}
</Typography>
</div>

    )
}