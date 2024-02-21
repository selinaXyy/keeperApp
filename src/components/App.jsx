import React, {useState} from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";

function App(){
    //keep tracking the added notes
    const [notes, setNotes] = useState([/** empty array with no objects */]);

    function addNote(titlePar, contentPar){
        setNotes((previousNotes)=>{
            return[
                ...previousNotes,
                {
                    noteTitle: titlePar,
                    noteContent: contentPar
                }
            ];
        });
    }

    function deleteNote(idPar){
        setNotes(
            notes.filter((note,index)=>{
                return index !== idPar;
            })
        );
    }

    return(
        <div>
            <Header />
            <CreateArea isAdded={addNote} />

            {notes.map((noteItem,currentIndex) => 
            <Note key={currentIndex} id={currentIndex}
            title={noteItem.noteTitle} content={noteItem.noteContent} 
            delete={deleteNote}
            />)} 

            <Footer />
        </div>
    );
}

export default App;
