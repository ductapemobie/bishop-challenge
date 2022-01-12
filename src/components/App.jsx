import { useState } from "react";
import About from "./About";
import CalcButton from "./CalcButton";
import ChessBoard from "./ChessBoard";
import DisplayBoard from "./DisplayBoard";
import Footer from "./Footer";
import NumberInput from "./NumberInput";
import ResetButton from "./ResetButton";
import TextInputs from "./TextInputs";

export default function App(){
    const [startPosition, setStartPosition] = useState({row:-1, column:-1});
    const [endPosition, setEndPosition] = useState({row:-1, column:-1});
    const [moveCount, setMoveCount] = useState(-1);
    const [calcState, setCalcState] = useState(false);//this has 2 states true and false
    const [answerState, setAnswerState] = useState(null);//this has 3 states, null true & false

    return <>
        <h1 className="header">Bishop Challenge</h1>
        <div className="board-holder">
            <ChessBoard boardState={startPosition} setState={setStartPosition}
            endPosition={endPosition} setEndPosition={setEndPosition}/>
        <div>
            <NumberInput setMoveCount={setMoveCount}/>
            <TextInputs setState={setStartPosition} type={"Start"}/>
            <TextInputs setState={setEndPosition} type={"End"}/>
            <div className="center-item">
                <CalcButton setState={setCalcState} startPosition={startPosition} 
                    endPosition={endPosition} moveCount={moveCount} 
                    setAnswerState={setAnswerState}/>
                <ResetButton setStart={setStartPosition} setEnd={setEndPosition} 
                    setCalc={setCalcState} setAnswer={setAnswerState}
                    setMoveCount={setMoveCount}/>
            </div>
            <About/>
            {calcState?<DisplayBoard answerState={answerState}/>:<></>}
        </div>
        </div>

        
        <Footer/>
    </>
}