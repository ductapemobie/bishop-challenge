import ChessSquare from "./ChessSquare";
import '../style/Chess.css';

export default function ChessBoard(){

    function squareClicked(i, j){
        console.log(`${i} ${j} clicked`);
    }

    const squaresArr = [];
    for(let i = 0; i < 8; i ++){
        for (let j = 0; j < 8; j++){
            if ((i + j) % 2 === 1){
                squaresArr.push(
                    <ChessSquare color="blue" row={i} col={j} squareClicked={squareClicked} key={`${i}${j}`}/>
                )
            }else{
                squaresArr.push(
                    <ChessSquare color="white" row={i} col={j} squareClicked={squareClicked} key={`${i}${j}`}/>
                )
            }
        }
    }
    console.log("hi")

    return <div className="board-container">
        {squaresArr}
    </div>
}