import React, { useState } from 'react'
import { Sidebar, Content } from '../Components';

const Layout = () => {

    const [isOpen,setSidebarOpen] = useState(true);

    const toggle = ()=>{
setSidebarOpen(!isOpen)
    }
    return (
        <div className="App wrapper">
            <Sidebar  toggle={toggle} isOpen={isOpen}/>
            <Content toggle={toggle} isOpen={isOpen}/>
        </div>
    )
}
export default Layout;
