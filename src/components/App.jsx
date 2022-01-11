import { useState } from "react";
import ChessBoard from "./ChessBoard";
import ResetButton from "./ResetButton";

export default function App(){
    const [startPosition, setStartPosition] = useState(null);
    const [endPosition, setEndPosition] = useState(null);

    return <>
        <h1 className="header">Bishop Challenge</h1>
        <ChessBoard/>
        <ResetButton setStart={setStartPosition} setEnd={setEndPosition}/>
    </>
}