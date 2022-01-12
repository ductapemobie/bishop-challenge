import ChessSquare from "./ChessSquare";
import '../style/Chess.css';



export default function ChessBoard(props){
    const boardState = props.boardState;
    const setState = props.setState;
    const endPosition = props.endPosition;
    const setEndPosition = props.setEndPosition;
    

    function squareLeftClicked(i, j){
        setState({
            row:i,
            column:j
        });
    }

    function squareRightClicked(i, j){
        setEndPosition({
            row:i,
            column:j
        })
    }

    const squaresArr = [];
    for(let i = 0; i < 8; i ++){
        squaresArr.push([]);
        for (let j = 0; j < 8; j++){
            let colorVal = null;
            if (endPosition && boardState && i === endPosition.row && j === endPosition.column &&
                i === boardState.row && j == boardState.column){
                colorVal = 'yellow';
            }else if (endPosition && i === endPosition.row && j === endPosition.column){
                colorVal = 'red';
            }else if (boardState && i === boardState.row && j === boardState.column){
                colorVal = 'green';
            }else if ((i + j) % 2 === 1){
                colorVal = 'blue';
            }else{
                colorVal = 'white'
            }
            squaresArr[i].push(
                <ChessSquare color={colorVal} row={i} col={j}
                squareLeftClicked={squareLeftClicked}
                squareRightClicked={squareRightClicked}
                key={`${i}${j}`}/>
            );
        }
    }

    return <div className="board-container">
        {squaresArr}
    </div>
    
}