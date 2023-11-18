import Child from "./Child"
const Myself = () => {
    return (
        <div style={{padding:"30px",border:"1px solid blue "}} >
            <h1>I am Mysef Component </h1>
            <Child/>
        </div>
    );
};

export default Myself;