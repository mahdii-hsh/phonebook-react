import { BrowserRouter, Routes, Route, NavLink, useNavigate, Navigate } from 'react-router-dom'
import Main from "./components/Main"
import Login from './components/Login'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/createuser' element={}/>
        <Route path='/*' element={<Navigate to='/login' />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
