import { useState } from "react";
import ChessBoard from "./ChessBoard";
import ResetButton from "./ResetButton";

export default function App(){
    const [startPosition, setStartPosition] = useState({row:-1, column:-1});
    const [endPosition, setEndPosition] = useState({row:-1, column:-1});

    return <>
        <h1 className="header">Bishop Challenge</h1>
        <div className="board-holder">
            <div className="subheader">Starting Position</div>
            <div className="subheader">End Position</div>
            <ChessBoard boardState={startPosition} setState={setStartPosition}/>
            <ChessBoard boardState={endPosition} setState={setEndPosition}/>
        </div>
        <ResetButton setStart={setStartPosition} setEnd={setEndPosition}/>
    </>
}