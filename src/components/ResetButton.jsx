export default function ResetButton(props){
    const setStart = props.setStart;
    const setEnd = props.setEnd;

    function resetClicked(){
        setStart(null);
        setEnd(null);
    }
    
    return <button onClick={resetClicked}>Reset</button>
}