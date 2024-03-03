import React from 'react'
 import './Layout.scss'
import Header from '../components/Header/Header'
// import Aside from '../components/Aside/Aside'
import { Outlet } from 'react-router-dom'
import Aside from '../components/Aside/Aside'
const Layout = () => {
  return (
    <>
    <Header/>
    <main className='layout'>
    <Aside />
    <Outlet/>
    </main>
    </>
  )
}

export default Layout