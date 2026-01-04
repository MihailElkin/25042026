import { TextareaAutosize, Typography } from "@mui/material"

export const Message = ({setMessage}:{ setMessage:(param:string)=>void}) => {
      const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage( event.target.value);
  }

    return (
        <div className="card" style={{ width: '92%', height: '200px', padding: '16px 8px', zIndex:'2' }}>
            <Typography className="cofo500" sx={{
                fontSize: '32px',
            }}>Пожалуйста, дайте нам знать, если есть еще что-то важное, что мы должны учесть</Typography>

     <TextareaAutosize minRows={3} maxRows={5} maxLength={500} onChange={onChange} />
         
        </div>
    )
}