import { Button, Typography } from "@mui/material";
import drinks from "../assets/img/ef81f1167bc0bf260622c869ace768c2a038e05e.png";
import way from '../assets/img/83fe65c48200a145839afec54f214a5101d0156b.png'
import { useState } from "react";

export const RestInfo = () => {
    const [isVisible, setIsVisible] = useState(false)

    const onClick = () => {
        setIsVisible((prev) => !prev)
    }

    return (
        <div
            className="card"
            style={{ width: "344px", height: isVisible ? 571 : 212, padding: "16px 8px", transition: '0.5s cubic-bezier(0.7, 0.01, 0.15, 0.99)' }}
        >
            <img
                src={drinks}
                width="152px"
                style={{ position: "absolute", transition: '0.5s cubic-bezier(0.7, 0.01, 0.15, 0.99)', margin: `0px 216px ${isVisible ? '405' : '48'}px 0px` }}
            />
            <Typography
                className="cofo500"
                sx={{
                    fontSize: "40px",
                }}
            >
                Банкет
            </Typography>
            <Typography
                className="bad400"
                sx={{
                    fontSize: "18px",
                    width: 319,
                }}
            >
                {"Саfe 51"}
            </Typography>
                        <Typography
                className="bad400"
                sx={{
                    fontSize: "18px",
                    width: 319,
                }}
            >
                {"г. Екатеринбург, ул. Восточная, 51, 9 этаж"}
            </Typography>
            <div className="restTime">
                <Typography
                    className="cofo500"
                    sx={{
                        fontSize: "30px",
                    }}
                >
                    Сбор гостей
                </Typography>

                <Typography
                    className="cofo500"
                    sx={{
                        fontSize: "30px",
                    }}
                >
                    с 16 :00
                </Typography>
            </div>

            <div className="restTime">
                <Typography
                    className="cofo500"
                    sx={{
                        fontSize: "30px",
                    }}
                >
                    Начало
                </Typography>

                <Typography
                    className="cofo500"
                    sx={{
                        fontSize: "30px"
                    }}
                >
                    в 17 :00
                </Typography>
            </div>
            <Button onClick={onClick} variant='outlined' className="cofo500" sx={{ fontSize: "30px", color: 'black', textTransform: 'none', borderColor: 'black' }}>Как пройти?</Button>
            <div className='restCard' style={isVisible ? { visibility: 'initial', opacity: 1 } : { visibility: 'hidden', opacity: 0, maxHeight: 0 }}>
                <img
                    src={way}
                    width="319px"
                />
                <Typography
                    className="bad400"
                    sx={{
                        margin:'0 auto',
                        width:'273px',
                        fontSize: "18px",
                    }}
                >
                    Нужно подняться на лифте до 8 этажа и еще один этаж пройти по лестнице
                </Typography>
            </div>
        </div>
    );
};
