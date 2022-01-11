import ChessSquare from "./ChessSquare";
import '../style/Chess.css';

export default function ChessBoard(props){
    const boardState = props.boardState;
    const setState = props.setState;
    console.log(props);


    function squareClicked(i, j){
        setState({
            row:i,
            column:j
        });
    }

    const squaresArr = [];
    for(let i = 0; i < 8; i ++){
        squaresArr.push([]);
        for (let j = 0; j < 8; j++){
            if (boardState && i === boardState.row && j === boardState.column){
                squaresArr[i].push(
                    <ChessSquare color="red" row={i} col={j} squareClicked={squareClicked} key={`${i}${j}`}/>
                )
            }else if ((i + j) % 2 === 1){
                squaresArr[i].push(
                    <ChessSquare color="blue" row={i} col={j} squareClicked={squareClicked} key={`${i}${j}`}/>
                )
            }else{
                squaresArr[i].push(
                    <ChessSquare color="white" row={i} col={j} squareClicked={squareClicked} key={`${i}${j}`}/>
                )
            }
        }
    }

    return <div className="board-container">
        {squaresArr}
    </div>
}