
const Scroll = props => {
    return(
        <div style={{overflowY: "scroll", border:"4px solid black", height:"700px"}}>
            {props.children}
        </div>
    );
}

export default Scroll;