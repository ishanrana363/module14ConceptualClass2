import { useContext, useState } from 'react';
import { themProvider } from '../App';

const Header = () => {
    const [data, setData] = useState(false)
    const changeValue = () =>{
        setData(!data)
    }
    const {theam,setTheam} = useContext(themProvider)
    const themChange = () =>{
        setTheam(theam === "dark" ? "light" : "dark")
    }
    return (
        <>
                <header>
                    <div>
                        <h2>IR LAB </h2>
                    </div>
                    <div>
                        <button onClick={themChange} className='btn btn-danger' >
                            {theam}
                        </button>
                    </div>
                    {
                        data ? (<button onClick={changeValue} className= "btn btn-primary" >Logout</button>)
                            :
                            (<button onClick= {changeValue} className="btn btn-danger " >Login</button>)
                    }
                </header>
        </>
    );
};

export default Header;