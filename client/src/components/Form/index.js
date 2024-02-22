import React from "react";

export default function Form({input, setInput, addTask}){
    return(
        <div>
            <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            role="input"
            />
            <button type="submit" onClick={(e) => addTask(e)}>Add</button>
        </div>
    )
}