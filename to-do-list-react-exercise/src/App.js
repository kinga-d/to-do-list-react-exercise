import React, { useState } from 'react';
import TodoList from './TodoList.js';

function App() {
    useState([])
    return (
        <>
            <TodoList />
            <input type="text" />
            <button>Add Todo </button>
            <button> Clear Completed Todos </button>
            <div>0 left to do</div>
        </>
        )
}

export default App;
