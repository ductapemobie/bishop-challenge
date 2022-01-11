import { useState } from "react";
import ChessBoard from "./ChessBoard";
import ResetButton from "./ResetButton";

export default function App(){
    const [startPosition, setStartPosition] = useState({row:-1, column:-1});
    const [endPosition, setEndPosition] = useState({row:-1, column:-1});

    return <>
        <h1 className="header">Bishop Challenge</h1>
        <ChessBoard boardState={startPosition} setState={setStartPosition}/>
        <ResetButton setStart={setStartPosition} setEnd={setEndPosition}/>
    </>
}