/* eslint-disable react-refresh/only-export-components */
// import LoginFrom from "./components/LoginFrom.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header.jsx";
import ContextSolution from "./components/ContextSolution.jsx";
import { createContext, useState } from 'react';
// import ContextProblem from "./components/ContextProblem.jsx";

export const themProvider =  createContext()
const App = () => {
    let [theam,setTheam] = useState("light")
    return (
        <div>
            <themProvider.Provider value={{theam,setTheam}} >
                <Header/>
                {/*<LoginFrom/>*/}
                {/*<ContextProblem/>*/}
                <ContextSolution/>
            </themProvider.Provider>
        </div>
    );
};

export default App;