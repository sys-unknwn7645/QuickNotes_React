import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import NotesArrange from "./NotesArrange";

function App() {

  const [noteFull, setnoteFull] =useState(false)

  const [newNote, setNote] = useState([{
    title:"",
    note: "",
    id:0
  }])

  const [arrNote, setarrNote] = useState([{
    title:"",
    note: "",
    id:0
  }])

  function addItem(inpItem){
    if (newNote.length >= 15) {
      setnoteFull(true)
    } else {
      setNote((preVal)=>{
        return ((newNote.length ===1 & newNote[0].title===''))? [inpItem]:[...preVal,inpItem]
      })
    }

    
  }

  function deleteItem(id){
    if (newNote.length < 15) {
      setnoteFull(false)
    }

    setNote ((preVal)=>{
      return (newNote.length === 1)? [{title:"",note: "",id:0}]:preVal.filter((item)=>{return item.id !== id})
    })

  }

  function listChange(type){

    setNote((preVal)=>{
    return (type==="Random")? shuffle([...preVal]):alphaTize([...preVal])
    })

  }


  function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function alphaTize(array){

    let unsorted = []

    for (let i = 0; i<array.length; i++){
    unsorted.push(array[i].title)
    }

    let sorted = [...unsorted]
    let newArr = [];

    sorted.sort()

    for (let i=0; i<sorted.length; i++){
        let tempArr  = array[Number(unsorted.indexOf(sorted[i]))]
        newArr.push(tempArr)
      }
    
    return newArr
  }


  return (
    <div className="pagecontainer">
      <Header />
      <CreateArea addButton={addItem} full={(noteFull===true)? "Full. Delete Cells":"Take a note..."}/>
      <NotesArrange arr = {listChange}/>
      <div className="notesec">
      {newNote.map((note,index) => {
        let condition = (note.title==='' & note.id===0)
        return condition? null:<Note key={index} id={note.id} title={note.title} content={note.note} removeItem={deleteItem}/>
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
