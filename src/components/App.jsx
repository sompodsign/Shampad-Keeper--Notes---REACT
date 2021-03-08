import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(note) {
    setNoteList((prevList) => {
      return [...prevList, note];
    });
  }

  function deleteNote(id) {
    setNoteList((prevList) => {
      return prevList.filter((noteObj, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteList.map((noteObj, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteObj.title}
            content={noteObj.content}
            onclick={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
