import React from "react";
import axios from '../../axios'
export default function TaskList({tasks, fetchData}){

    const updateTask = async (id) => {
        try{
            const response = await axios.put(`/tasks/${id}`, {
                id
            } )
            fetchData()
            return response.data.json
        }catch(err){
            console.error(err.message)
        }
    }

    const deleteTask = async (id) => {
        try{
            const response = await axios.delete(`/tasks/${id}`, {
                id
            } )
            fetchData()
            return response.data.json
        }catch(err){
            console.error(err.message)
        }
    }

    return(
        <div>
            <ul>
                {tasks?.map((task) => (
                    <li key = {task._id}>
                        <span>{task.text}</span>
                        <button onClick={() => updateTask(task._id)}>
                            {task.completed ? '🐊' : '🦧'}
                        </button>
                        <button onClick={() => deleteTask(task._id)}>🚮</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}