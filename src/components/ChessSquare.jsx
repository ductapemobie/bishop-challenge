import '../style/Chess.css';

export default function ChessSquare(props){
    const squareColor = props.color;//blue or white
    const row = props.row;
    const col = props.col;
    const squareClicked = props.squareClicked;
    const rowMapping = ['8', '7', '6', '5', '4', '3', '2', '1'];
    const colMapping = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const coords = ((col===0)?rowMapping[row]:"")+((row===7)?colMapping[col]:"");
    let retDiv = <div></div>

    function handleClick(){
        squareClicked(row, col);
    }

    if (squareColor === "blue"){
        retDiv = <div className='blue-square noselect' onClick={handleClick}>{coords}</div>
    }else if (squareColor === "white"){
        retDiv = <div className='white-square noselect' onClick={handleClick}>{coords}</div>
    }else if (squareColor === "red"){
        retDiv = <div className='red-square noselect' onClick={handleClick}>{coords}</div>
    }else{
        throw new Error("Invalid Square Color");
    }

    return retDiv;
}