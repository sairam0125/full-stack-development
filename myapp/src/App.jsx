import React from "react";

import Navbar from "./components/Navbar";

import Main from "./components/Main";
import Sidebar1 from "./components/Sidebar1";
import Sidebar2 from "./components/Sidebar2";
import Footer from "./components/Footer";
import global from "./components/global.css"
const App=()=>{
    return(
        <div className="app">
            <Navbar/>
            <Main></Main>
            <div className="sidebar">
                <Sidebar1></Sidebar1>
                <Sidebar2></Sidebar2>
            </div>
            <Footer/>
        </div>
    )
}
export default App;