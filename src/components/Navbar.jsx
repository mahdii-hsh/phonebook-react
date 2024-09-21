import React from 'react'
import { useNavigate } from 'react-router-dom'

const optionNav = {
  name: "دفترچه تلفن من",
  signOut: "خروج از حساب",
  addContact: "افزودن مخاطب جدید"
}

export default function Navbar() {

  const navigate = useNavigate()
  return (
    //  navbar 
    <div className="navbar navbar-glass navbar-floating grid grid-cols-8">
      <div className="navbar-start">
        <a className="navbar-item font-black text-emerald-500 text-xl">{optionNav.name}</a>
      </div>
      <div className="col-start-6 col-end-8 text-end  mr-6">
        <a className="navbar-item">{optionNav.addContact}</a>
      </div>
      <div onClick={() => navigate('/login')} className="col-start-8 border-l">
        <a className="navbar-item">{optionNav.signOut}</a>
      </div>
    </div>
  )
}
