import React from "react";

function Note(props){
    
    return (
    <div className="note" key={props.key} id={props.id} >
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={()=>{
            props.delete(props.id); //dont need to add {} directly inside of a function
        }}>DELETE</button>
    </div>
    );
}

export default Note;