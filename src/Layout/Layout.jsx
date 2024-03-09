import React from 'react'
 import './Layout.scss'
import Header from '../components/Header/Header.jsx'
// import Aside from '../components/Aside/Aside'
import { Outlet } from 'react-router-dom'
import Aside from '../components/Aside/Aside.jsx'
const Layout = () => {
  return (
    <>
    <Header/>
    <main className='layout'>
      <aside className='aside-layout'>
    <Aside />
      </aside>
    <div className='main-layout'>
    <Outlet />
    </div>
    </main>
    </>
  )
}

export default Layout