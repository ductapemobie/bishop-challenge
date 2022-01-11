import { useState } from "react";
import CalcButton from "./CalcButton";
import ChessBoard from "./ChessBoard";
import DisplayBoard from "./DisplayBoard";
import ResetButton from "./ResetButton";

export default function App(){
    const [startPosition, setStartPosition] = useState({row:-1, column:-1});
    const [endPosition, setEndPosition] = useState({row:-1, column:-1});
    const [calcState, setCalcState] = useState(false);

    return <>
        <h1 className="header">Bishop Challenge</h1>
        {calcState?
        //state for displaying the answer
        <>
        <DisplayBoard/>
        </>
        :
        //state for inputting values 
        <>
        <div className="board-holder">
            <div className="subheader">Starting Position</div>
            <div className="subheader">Number of Moves</div>
            <div className="subheader">End Position</div>
            <ChessBoard boardState={startPosition} setState={setStartPosition}/>
            <div><input type='number' className="number-input"/></div>
            <ChessBoard boardState={endPosition} setState={setEndPosition}/>
        </div>
            <CalcButton setState={setCalcState} startPosition={startPosition} endPosition={endPosition}/>
        </>
        }
        <ResetButton setStart={setStartPosition} setEnd={setEndPosition} setCalc={setCalcState}/>
    </>
}