import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";



function App() {
    const tasks1 = [
        {id:1, title:'HTML', isDone: true},
        {id:2, title:'CSS', isDone: true},
        {id:3, title:'JS', isDone: false}
    ]
    const tasks2 = [
        {id:1, title:'films', isDone: true},
        {id:2, title:'serials', isDone: false},
        {id:3, title:'anime', isDone: true}
    ]
    return(
        <div className={'App'}>
            <Todolist title='what to learn' tasks={tasks1}/>
            <Todolist title='What to do' tasks={tasks2}/>
        </div>
    )
}

export default App