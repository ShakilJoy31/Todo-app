import logo from './logo.svg';
import './App.css';
import SignUp from './component/SignUp';
import Login from './component/Login';
import TodoButton from './component/ToDo/TodoButton';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AddTask from './component/ToDo/AddTask';
import AllTask from './component/ToDo/AllTask';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './component/ToDo/RequireAuth';
import LogOut from './component/ToDo/LogOut';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './component/firebase.init';

function App() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();  
  const handleHome = () =>{
    navigate('/'); 
  }
  return (
    <div>
      {
        user && <LogOut></LogOut>
      }

      {
        user && 
        <div className='d-flex justify-content-center mt-5'>
        <button onClick={handleHome} type="button" class="btn btn-outline-primary">Take me to the Home</button>
        </div>
        
      }
      
      <Routes>
        <Route path='addtodo' element={<RequireAuth>
          <AddTask></AddTask>
        </RequireAuth>}></Route>
        

        <Route path='login' element={<Login></Login>}></Route>

        <Route path='signup' element={<SignUp></SignUp>}></Route>

        <Route path='alltask' element={<RequireAuth>
          <AllTask></AllTask>
        </RequireAuth>}></Route>

        <Route path='/' element={<RequireAuth>
        <TodoButton></TodoButton>
        </RequireAuth>}></Route>
      </Routes>
      

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
