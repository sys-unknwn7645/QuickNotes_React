import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';


function CreateArea(props) {
  const[hide, setHide] = useState(true)

  const [inpItem,setInp] = useState({
    title:'',
    note: '',
    id:0
  })

  function changeHandle(event){
    const {name, value}   = event.target
     setInp((preVal)=>{
      return (name==="title")? {title:value,note:preVal.note,id:preVal.id}:{title:preVal.title,note:value,id:preVal.id}
    })
    

  }

  function clearNext(){
    setInp((preVal)=>{
    return {title:'', note:'', id:(preVal.id+1)}
  })}


  function formDef(event){
      event.preventDefault()
  }

  function show(){
    return setHide((preVal)=>{
      return preVal? !preVal:preVal
    })
  }
  

  return (
    <div onSelect={show}>
      <form className="create-note" onSubmit={formDef} >
        {hide? null:(<input onChange={changeHandle} value ={inpItem.title} name="title" placeholder="Title" />)}
        <textarea onChange={changeHandle} value={inpItem.note} name="content" placeholder={props.full} rows={hide? 1:3} />
        {hide? null:(<Fab 
          onClick={()=>{
            props.addButton(inpItem);
            clearNext();
            }}>
            <AddIcon />
          </Fab>)}
      </form>
    </div>
  );
}

export default CreateArea;
