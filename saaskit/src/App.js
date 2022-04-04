import logo from './logo.svg';
import './styles.css'
import Header from './Components/header'
import Footer from './Components/footer'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/home'
import Login from './Pages/login'
import Signup from './Pages/signup'
import Dashboard from './Pages/dashboard'
import Account from './Pages/account'
import Profile from './Pages/profile'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route  path='/' element={<Home/>}/>
                <Route  path='/login' element={<Login/>}/>
                <Route  path='/signup' element={<Signup/>}/>
                <Route  path='/dashboard' element={<Dashboard/>}/>
                <Route  path='/account' element={<Account/>}/>
                <Route  path='/profile' element={<Profile/>}/>
            </Routes>
        </div>
    );
}

export default App;
