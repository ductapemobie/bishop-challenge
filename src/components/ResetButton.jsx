export default function ResetButton(props){
    const setStart = props.setStart;
    const setEnd = props.setEnd;
    const setCalc = props.setCalc;
    const setAnswer = props.setAnswer;
    const setMoveCount = props.setMoveCount;

    function resetClicked(){
        setStart({row:-1, column:-1});
        setEnd({row:-1, column:-1});
        setCalc(false);
        setAnswer(null);
        setMoveCount(-1);
    }
    
    return <button onClick={resetClicked}>Reset</button>
}