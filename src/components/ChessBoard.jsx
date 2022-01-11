import ChessSquare from "./ChessSquare";
import '../style/Chess.css';



export default function ChessBoard(props){
    const boardState = props.boardState;
    const setState = props.setState;
    const colMap = {'a':0, 'b':1, 'c':2, 'd':3, 'e':4, 'f':5, 'g':6, 'h':7};
    const rowMap = {'8':0, '7':1, '6':2, '5':3, '4':4, '3':5, '2':6, '1':7};

    function squareClicked(i, j){
        setState({
            row:i,
            column:j
        });
    }

    function textChanged(event){
        const val = event.target.value;
        if (val.length === 2){
            if(val[0] in rowMap && val[1] in colMap){
                setState({
                    row:rowMap[val[0]],
                    column:colMap[val[1]]
                })
            }
        }
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

    return <div>
    <div className="board-container">
        {squaresArr}
    </div>
    <div className='center-item'>
        Input Square <input type='text' onChange={textChanged} maxLength={2}></input>
    </div>
    </div>
}