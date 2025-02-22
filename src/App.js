import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainHome from './components/MainHome';
import Home from './components/Home';
import AdminLogin from './components/AdminLogin';
import AdminHome from './components/AdminHome';

function App() {
  return (
    <div>
     
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/mainhome' element={<MainHome/>}/>
      <Route path='/adminhome' element={<AdminHome/>}/>
      <Route path='/adminlogin' element={<AdminLogin/>}/>
    </Routes>
    
    </BrowserRouter>


    </div>
  );
}

export default App;
