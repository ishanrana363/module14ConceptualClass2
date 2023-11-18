

const ContextProblem = () => {
    let property = "100 koti taka"
    return (
        <div style={{height:"70vh",padding:"40px 100px"}} >
            <h1>Context proble </h1>
            <GrandFather property = {property} />
        </div>
    );
};

export default ContextProblem;

const GrandFather = (props) =>{
    const {property} = props
    return(
        <div style={{border:"2px solid black",padding:"30px"}} >
            <p>I am grandFather component</p>
            <Father property = {property} />
        </div>

    )
}

const Father = (props) =>{
    // eslint-disable-next-line react/prop-types
    const {property} = props
    return(
        <div style={{border:"2px solid red",padding:"30px"}}>
            <p>I am Father component</p>
            <Myself property = {property} />
        </div>

    )
}
const Myself = (props) =>{
    const {property} = props
    return(
        <div style={{border:"2px solid green",padding:"30px"}} >
            <p>I am mySefl component</p>
            <Child property = {property} />

        </div>

    )
}

const Child = (props) =>{
    const {property} = props
    return(
        <div style={{border:"2px solid gold",padding:"30px"}} >
            <p>I am Child component</p>
            <div>
                <h1>
                    Property : {property}
                </h1>
            </div>
        </div>

    )
}











































































