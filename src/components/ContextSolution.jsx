import { createContext } from "react";
import GrandFather from "./GrandFather";
// eslint-disable-next-line react-refresh/only-export-components
export let propertyContext = createContext()
const ContextSolution = () => {
    const obj = {
        name :"Ishan Rana",
        home : "Dinajpur"
    }
    return (
        <propertyContext.Provider value={{myArr : obj}} >
            <div style={{height:"90vh",padding:"50px 70px"}} >
            <h1> Context solution </h1>
            <GrandFather/>
        </div>
        </propertyContext.Provider>
    );
};

export default ContextSolution;