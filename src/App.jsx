import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import Main from "./components/Main"
import Login from './components/Login'
import CreateUser from './components/CreateUser'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path='/login/:name' element={<Main />}/>
        <Route path='/createuser' element={<CreateUser />}/>
        <Route path='/*' element={<Navigate to='/login' />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
