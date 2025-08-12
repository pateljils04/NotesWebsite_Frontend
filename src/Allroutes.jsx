import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Otp from './components/Otp'
import Createnotes from './pages/Createnotes'
import Privatepage from './components/Privatepage'
import Notes from './pages/Notes'
import Updatenotes from './pages/Updatenotes'
import AdminNotes from './pages/AdminNotes'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/otp' element={<Otp />}></Route>
        <Route path='/create'
          element={
            <Privatepage>
              <Createnotes />
            </Privatepage>
          }></Route>
        <Route path='/getnotes' element={
          <Privatepage>
            <Notes />
          </Privatepage>}>
        </Route>
        <Route path='/update/:noteId' element={<Updatenotes />}></Route>
        <Route path='/getallnotes' element={
          <Privatepage>
            <AdminNotes />
          </Privatepage>
        }></Route>

      </Routes>
    </div>
  )
}

export default Allroutes
