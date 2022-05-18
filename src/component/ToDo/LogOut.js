import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const LogOut = () => {
    const handleSignOut = () =>{
        signOut(auth); 
        toast.error('You are logged out'); 
    }
    return (
        <div className='d-flex justify-content-center mt-5'>
        <button onClick={handleSignOut} type="button" class="btn btn-outline-danger">Log me Out</button>
    </div>
    );
};

export default LogOut;