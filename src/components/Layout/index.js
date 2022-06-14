import React from 'react'
import './index.scss'
import Sidebar from './../Sidebar/index'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        {/* <span className="tags top-tag-html">&lt;html&gt;</span> */}
        <span className="tags top-tag">&lt;body&gt;</span>
        {/* <Outlet/> */}
        <span className="tags bottom-tag">&lt;/body&gt;</span>
        <br />
        <span className="bottom-tag-html">&lt;/html&gt;</span>
      </div>
    </div>
  )
}

export default Layout
