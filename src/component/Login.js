import React, {  useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useSignInWithGithub, useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from './firebase.init';

const Login = () => {
    const [email, setEmail] = useState(''); 
    const [loggedInUser, loggedInLoading] = useAuthState(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);

    

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
      );

    const location = useLocation(); 
    const navigate = useNavigate(); 
    const from = location?.state?.from?.pathname || '/'; 

    const handleOnSubmit =async event => {
        event.preventDefault();
        const email = event.target.email.value;
        setEmail(email); 
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
        
    }

    const handleSignInWithGoogle = () =>{
        signInWithGoogle(); 
    }
    
    
    
    if(loggedInUser){
        navigate(from, {replace: true}); 
    }
    if(loggedInLoading){
        return <div className='d-flex justify-content-center'>
        <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    }
    

    return (
        <div className='mt-4 row forheight'>
            <div className='d-block mx-auto col-md-8 col-sm-8 col-lg-6 border border-primary p-3 rounded w-75'>
                <h1 className='text-primary'>Log in</h1>
                <form onSubmit={handleOnSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input onBlur={(event)=>{setEmail(event.target.value)}} type="email" class="form-control" name='email' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" name='password' id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" required />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <p className='me-2'>New to Smart book Warehouse? </p>
                        <Link to='/signup'>Sign Up</Link>
                    </div>

                    <div className='d-flex justify-content-center'>
                        <p className='me-2'>Forget password? </p>
                        
                    </div>

                    <div>
                        {
                            loading && <div className='d-flex justify-content-center'>
                            <div class="spinner-border text-info" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        }
                    </div>

                    <div>
                        {
                            googleLoading && <div className='d-flex justify-content-center'>
                            <div class="spinner-border text-info" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        }
                    </div>


                    <button className="btn btn-outline-primary w-50
            d-block mx-auto" type="submit">Log me in</button>

                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='line w-50'></div>
                        <p>or</p>
                        <div className='line w-50'></div>
                    </div>

                    <div>

                    </div>
                </form>

                <button onClick={handleSignInWithGoogle} className="btn btn-outline-primary w-50
            d-block mx-auto mb-3" type="submit">Sign in with Google</button>

            </div>
        </div>
    );
};

export default Login;