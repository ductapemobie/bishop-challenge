export default function ResetButton(props){
    const setCalc = props.setCalc;
    const setAnswer = props.setAnswer;

    function resetClicked(){
        setCalc(false);
        setAnswer(null);
    }
    
    return <button onClick={resetClicked}>Reset</button>
}