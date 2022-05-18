import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase.init';

const AddTask = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate(); 
    const handleOnSubmit = event =>{
        event.preventDefault();  
        const name = event.target.name.value; 
        const description = event.target.description.value; 
        const email = user?.email; 
        const data = {name, description, email}; 
        
        fetch('http://localhost:5000/addtask', {
            method: 'POST', 

            headers:{
                'content-type':'application/json'
            }, 
            body: JSON.stringify(data) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('task is added')
            navigate('/alltask'); 
        })


    }
    return (
        <div className='d-block mx-auto w-75 mt-5'>
            <form onSubmit={handleOnSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Task Name</label>
                    <input type="text" class="form-control" name='name' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div class="form-floating">
                    <textarea class="form-control" name='description' placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                    <label for="floatingTextarea2">Description</label>
                </div>
                <button type="submit" class="btn btn-outline-primary mt-4 d-block mx-auto w-75">Complete</button>
            </form>
        </div>
    );
};

export default AddTask;