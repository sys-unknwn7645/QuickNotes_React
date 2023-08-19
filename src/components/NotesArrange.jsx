import React, { useState } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function NotesArrange(props){

  const [arrCon, arrState] = useState(["Random", "Alpha"])

  return (
    <div className="changeButton">
      <Stack spacing={2} direction="row" sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
        height: "auto",
        marginTop: "40px"
        }}>
          <Button onClick={()=>{props.arr(arrCon[0])}} name={arrCon[0]} variant="contained">Randomize List</Button>
          <Button onClick={()=>{props.arr(arrCon[1])}} name= {arrCon[1]} variant="contained">Alphabetize List</Button>
      </Stack>
    </div>
  );
}

export default NotesArrange