import React, { useState } from 'react'
import './Layout.scss'
import Header from '../components/Header/Header.jsx'
// import Aside from '../components/Aside/Aside'
import { Outlet } from 'react-router-dom'
import Aside from '../components/Aside/Aside.jsx'
const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => setIsOpen(!isOpen);

  const receivedData=(data)=>{
      setIsOpen(data)
      console.log("data passed from child is parent is " , data)
  }
    

  return (
    <>
      {/* <Header/> */}
      <main className='layout'>
        <aside className={`aside-layout ${isOpen ? "sidebar--open" : ""}`}>
          <Aside sendDataToParent={receivedData} />
        </aside>
        <div className='main-layout'>
          <div className="menu-icon" onClick={handleTrigger} >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default Layout