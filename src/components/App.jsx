import { useState } from "react";
import CalcButton from "./CalcButton";
import ChessBoard from "./ChessBoard";
import DisplayBoard from "./DisplayBoard";
import NumberInput from "./NumberInput";
import ResetButton from "./ResetButton";

export default function App(){
    const [startPosition, setStartPosition] = useState({row:-1, column:-1});
    const [endPosition, setEndPosition] = useState({row:-1, column:-1});
    const [moveCount, setMoveCount] = useState(-1);
    const [calcState, setCalcState] = useState(false);//this has 2 states true and false
    const [answerState, setAnswerState] = useState(null);//this has 3 states, null true & false

    return <>
        <h1 className="header">Bishop Challenge</h1>
        {calcState?
        //state for displaying the answer
        <>
        <DisplayBoard answerState={answerState}/>
        </>
        :
        //state for inputting values 
        <>
        <div className="board-holder">
            <div className="subheader">Starting Position</div>
            <div className="subheader">Number of Moves</div>
            <div className="subheader">End Position</div>
            <ChessBoard boardState={startPosition} setState={setStartPosition}/>
            <NumberInput setMoveCount={setMoveCount}/>
            <ChessBoard boardState={endPosition} setState={setEndPosition}/>
        </div>
            <CalcButton setState={setCalcState} startPosition={startPosition} 
                endPosition={endPosition} moveCount={moveCount} 
                setAnswerState={setAnswerState}/>
        </>
        }
        <ResetButton setStart={setStartPosition} setEnd={setEndPosition} 
            setCalc={setCalcState} setAnswer={setAnswerState}
            setMoveCount={setMoveCount}/>
    </>
}