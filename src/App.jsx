import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

  const [notes, setNotes]=useState([]);

  function addNote(note){
    setNotes(prevNotes=>{
      return [...prevNotes, note];
    })
  }

  function deleteNote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem, index)=>{
        return index!==id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem, index)=>{
        return <Note key={index} id={index} onDelete={deleteNote} title={noteItem.title} content={noteItem.content} />
      })}
      
      <Footer />
    </div>
  );
}

export default App;
