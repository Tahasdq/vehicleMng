import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Services = () => {
  return (
    <>
      <div>
      <h3>Services</h3>
      <div className="button-group my-4 mx-3">
        <Link to="/service/newservice" class="btn btn-primary px-5 py-2">
          New
        </Link>
        <Link to="/service/listservice" href="#" class="btn btn-primary ml-2 px-5 py-2">
          List
        </Link>
      </div>
      {/* <Link to="/service/newservice">New</Link>
      <Link to="/service/listservice">List</Link> */}
      </div>
      <Outlet />
    </>
  )
}

export default Services