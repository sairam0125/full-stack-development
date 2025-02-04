// import React from "react";

// import Navbar from "./components/Navbar";

// import Main from "./components/Main";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";
// import global from "./components/global.css"
// const App=()=>{
//     return(
//         <div className="app">
//             <Navbar/>
//             <Main></Main>
//             <div className="sidebar">
//                 <Sidebar1></Sidebar1>
//                 <Sidebar2></Sidebar2>
//             </div>
//             <Footer/>
//         </div>
//     )
// }
// export default App;

// import React,{Component} from "react";
// import CBCPropex1 from "./propsexample/CBCPropex1";

// class App extends Component{
//     render(){
//         return(
//             <div>App
//                 <hr/>

//                 <CBCPropex1
//                 username="Sam"
//                 age={25}
//                 desig={["developer","tester"]}
//                 userDetails={{city:"hyd",area:"maisammaguda"}}
//                 sendFun={function(){alert("hi iam from parent component")}}
//                 />
//             </div>
//         )
//     }
// }
// export default App;

//! props

import React,{Component} from "react";
import FBCPropsex1 from "./propsexample/FBCPropsex1";

const App=()=>{
    return(
        <div>
            <FBCPropsex1
            username="Sairam"
            isLoggedIn={false}
            hobbies={["reading","music","editing"]}
            />
        </div>
    )
}
export default App;