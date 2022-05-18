import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const AllTask = () => {
    const [tasks, setTask] = useState([]); 
    const [user, loading, error] = useAuthState(auth);
    useEffect(()=>{
        fetch(`http://localhost:5000/seetask/${user?.email}`)
    .then(res => res.json())
    .then(data => {
        setTask(data); 
    })
    },[])
    

    const handleDeleteButton = (id) =>{
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE', 
        })
        .then(res => res.json())
        .then(data => {
            const rest = tasks.filter(task => task._id !== id); 
            setTask(rest); 
        })
    }


    return (
        <div className='row mt-5 gap-3'>
            {
                tasks.map(task => <div className='col-lg-4 col-12 border border-primary rounded'>
                    <div>
                    <h2>Name of the task <span>{task.name}</span> </h2>
                    <p>Description: <span>{task.description}</span> </p>
                    <button onClick={()=>handleDeleteButton(task._id)} type="button" class="btn btn-outline-danger mt-4 mb-4">Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllTask;