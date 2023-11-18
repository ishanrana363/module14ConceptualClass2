import {useContext, useId} from "react";
import { propertyContext } from "./ContextSolution";
const LoginFrom = (props) => {
    const pProps = useContext(propertyContext)
    const userId = useId()
    const passwordId = useId()
    const {loginValue} = props
    if(loginValue){
        return (<>Provider Property : {pProps} </>)
    }
    return (
        <>
            <div className= "container" >
                <div className= "row justify-content-center mt-5 w-100 " >
                    <div className= "col-md-4 " >
                        <div className= "card p-5  " >
                            <form>
                                <div   >
                                    <label htmlFor={userId} >UserName</label>
                                    <input type= "text" id= {userId}  />
                                </div>
                                <div >
                                    <label htmlFor= {passwordId} >Password</label>
                                    <input type= "password" id=  {passwordId}  />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginFrom;