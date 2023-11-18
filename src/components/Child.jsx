import { useContext } from "react";
import { propertyContext } from "./ContextSolution";
import { themProvider } from "../App";
const Child = () => {
    const pContext = useContext(propertyContext)

    const {theam} = useContext(themProvider)
    return (
        <div style={{
            padding:"30px",
            border:"1px solid gold ",
            backgroundColor : theam==="light" ? "while" : "black",
            color : theam ==="light" ? 'black' : "white"
            }} >
            <h1>I Child Component </h1>
            <div>
                <h1>Property context : {pContext.myArr.name} </h1>
            </div>
        </div>
    );
};

export default Child;