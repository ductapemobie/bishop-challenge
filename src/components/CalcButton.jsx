export default function CalcButton(props){
    const setState = props.setState;
    const startPos = props.startPosition;
    const endPos = props.endPosition;

    function btnClicked(){
        if( (startPos.row >= 0 && startPos.row < 8) && (startPos.column >= 0 && startPos.column < 8) &&
        (endPos.row >= 0 && endPos.row < 8) && (endPos.column >= 0 && endPos.column < 8) ){
            setState(true);
        }else{
            alert("Non Valid Inputs Detected!!!")
        }
    }

    return <button onClick={btnClicked}>Calculate</button>
}