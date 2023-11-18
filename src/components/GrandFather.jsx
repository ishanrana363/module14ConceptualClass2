import Father from "./Father"

const GrandFather = () => {
    return (
        <div style={{padding:"30px",border:"1px solid black"}} >
            <p>I am GrandFather Component </p>
            <Father/>
        </div>
    );
};

export default GrandFather;