import React, {useState} from "react";

function CreateArea(props){
    //keep tracking the current user input
    const [input, setInput] = useState({
        title: "",
        content: ""
    });

    function saveInput(event){
        const noteType = event.target.name;
        const noteContent = event.target.value;

        setInput((previousInput) =>{
            return {
                ...previousInput,
                [noteType]: noteContent //updating based on note type
            };
        });
    }

    return (
        <form>
            <input name="title" onChange={saveInput} value={input.title} placeholder="Title" />
            <textarea name="content" onChange={saveInput} placeholder="Take a note..." value={input.content}></textarea>
            <button onClick={(event)=>{
                //prevent the auto-refreshing
                event.preventDefault();
            
                props.isAdded(input.title, input.content);
                setInput({
                    title: "",
                    content: ""
                });
            }} 
            type="Submit" >Add</button>
        </form>
    );
}

export default CreateArea;