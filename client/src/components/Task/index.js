import React, {useState} from 'react'
import Form from '../Form'

export default function Task(){
    const [input,setInput] = useState('');
    const [task, setTask] = useState([]);
    return(
        <div>
            <h2>Task List</h2>
            <Form input={input} setInput={setInput}/>
        </div>
    )
}