
import Myself from './Myself';

const Father = () => {
    return (
        <div style={{border:"1px solid red ",padding:"30px"}} >
            <p>I am Father Component </p>
            <Myself/>
        </div>
    );
};

export default Father;