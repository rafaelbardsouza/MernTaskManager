import React, {useEffect, useState} from 'react'
import Form from '../Form'
import axios from '../../axios'
import TaskList from '../TaskList';
export default function Task(){
    const [input,setInput] = useState('');
    const [tasks, setTasks] = useState([]);

    const fetchData = async () => {
        try{
            const response = await axios.get('/tasks')
            setTasks(response.data)
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect( () => {
        fetchData()
    }, [])

    const addTask = async (e) => {
        e.preventDefault()
        if(input.length === 0) return null
        await axios.post('/tasks', [{
            ...tasks,
            text: input,
            completed: false
        }])
        fetchData()
        setInput('')
    }
    return(
        <div>
            <h2>Task List</h2>
            <Form input={input} setInput={setInput} addTask={addTask}/>
            <TaskList tasks={tasks} fetchData={fetchData}/>
        </div>
    )
}