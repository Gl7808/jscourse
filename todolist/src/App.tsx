import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";



function App() {
    return(
        <div className={'App'}>
            <Todolist/>
            <Todolist/>
            <Todolist/>
        </div>
    )
}

export default App