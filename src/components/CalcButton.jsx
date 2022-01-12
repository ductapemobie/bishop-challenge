export default function CalcButton(props){
    const setState = props.setState;
    const startPos = props.startPosition;
    const endPos = props.endPosition;
    const moveCount = props.moveCount;
    const setAnswerState = props.setAnswerState;

    function runNumbers(){
        if (moveCount == 0){
            if ((startPos.row === endPos.row) && (startPos.column === endPos.column)){
                return true;
            }else{
                return false;
            }
        }else if (moveCount == 1){
            if ( (startPos.row + startPos.column) === (endPos.row + endPos.column) 
            || (startPos.row - endPos.row) === (startPos.column - endPos.column) ){
                return true;
            }else{
                return false;
            }
        }else{//on an empty board, a bishop can make it to any square of its color in 2 moves
            if ( ((startPos.row + startPos.column) % 2) === ((endPos.row + endPos.column) % 2) ){
                return true;
            }else{
                return false;
            }
        }
        //execution should never reach here
        return false;
    }

    function btnClicked(){
        if ((startPos.row >= 0 && startPos.row < 8) && (startPos.column >= 0 && startPos.column < 8)){
            if ((endPos.row >= 0 && endPos.row < 8) && (endPos.column >= 0 && endPos.column < 8)){
                if (moveCount > -1) {
                    setState(true);
                    setAnswerState(runNumbers());
                }else{
                    //invalid move count
                    alert("Invalid Number of Moves")
                }
            }else{
                //invalid end square
                alert("Invalid Ending Square")
            }
        }else{
            //invalid start square
            alert("Invalid Starting Square")
        }
    }

    return <button onClick={btnClicked}>Calculate</button>
}