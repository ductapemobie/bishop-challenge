export default function ResetButton(props){
    const setStart = props.setStart;
    const setEnd = props.setEnd;
    const setCalc = props.setCalc;

    function resetClicked(){
        setStart({row:-1, column:-1});
        setEnd({row:-1, column:-1});
        setCalc(false);
    }
    
    return <button onClick={resetClicked}>Reset</button>
}