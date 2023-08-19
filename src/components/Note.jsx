import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Note(props) {

  return (
      <Card sx={{ width: 250,
            height:150, 
            padding: 0,
            margin: 2,
            marginTop: 4,
            float: "left",
            boxShadow: 2,
            borderRadius:2,
            display: "flex",
            flexDirection: "column"}}>
        <CardContent sx={{overflow:"hidden", height: 110}}>
          <Typography  variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2">
            {props.content}
          </Typography>
        </CardContent>
        <CardActions sx={{height:40, justifyContent:"flex-end"}}>
          <Button onClick={()=>{props.removeItem(props.id)}}><DeleteIcon sx={{color:"#295986"}}/></Button>
        </CardActions>
      </Card>
  );
}

export default Note;

