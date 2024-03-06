import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import Layout from './components/Layout/Layout.jsx'
import { BrowserRouter, RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Services from './pages/Services/Sevices.jsx'
import Layout from './Layout/Layout.jsx'
import ArrivalAtOccurence from './pages/ArrivalAtOccurence/ArrivalAtOccurence.jsx'
import ClosingOccurence from './pages/ClosingOccurence/ClosingOccurence.jsx'
import StaffRegistration from './pages//Registation/StaffRegistration/StaffRegistration.jsx'
import VehicleRegistration from './pages/Registation/VehicleRegistration/VehicleRegistration.jsx'
import ApplicantRegistration from './pages/Registation/ApplicantRegistration/ApplicantRegistration.jsx'
import OccurenceCodeRegistration from './pages/Registation/OccurenceCodeRegistration/OccurenceCodeRegistration.jsx'
// import GuOfTheDay from './pages/GuOfTheDay/GuOfTheDay.jsx'
import StreetRegistration from './pages/Registation/StreetRegistration/StreetRegistration.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='service' element={<Services />} />
      <Route path='arrival' element={<ArrivalAtOccurence />} />
      <Route path='closing' element={<ClosingOccurence />} />
      <Route path='staffregistration' element={<StaffRegistration />} />
      <Route path='vehicleregistration' element={<VehicleRegistration />} />
      {/* <Route path='guoftheday' element={<GuOfTheDay />} /> */}
      <Route path='appilcantregistration' element={<ApplicantRegistration />} />
      <Route path='streetregistration' element={<StreetRegistration />} />
      <Route path='occurencecode' element={<OccurenceCodeRegistration />} />


    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Layout> */}
    <RouterProvider router={router} />
    {/* </Layout> */}
  </React.StrictMode>,
)
