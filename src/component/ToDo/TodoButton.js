import React from 'react';
import { useNavigate } from 'react-router-dom';

const TodoButton = () => {
    const navigate = useNavigate(); 
    const sendToAddTodo = () =>{
        navigate('/addtodo'); 
    }
    return (
        <div className='d-flex justify-content-center mt-5'>
            <button onClick={sendToAddTodo} type="button" class="btn btn-outline-info">Add Task</button>
        </div>
    );
};

export default TodoButton;