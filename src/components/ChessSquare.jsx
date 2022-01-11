import '../style/Chess.css';

export default function ChessSquare(props){
    const squareColor = props.color;//blue or white
    const row = props.row;
    const col = props.col;
    const squareClicked = props.squareClicked;
    let retDiv = <div></div>

    function handleClick(){
        squareClicked(row, col);
    }

    if (squareColor === "blue"){
        retDiv = <div className='blue-square' onClick={handleClick}></div>
    }else if (squareColor === "white"){
        retDiv = <div className='white-square' onClick={handleClick}></div>
    }else{
        throw new Error("Invalid Square Color");
    }

    return retDiv;
}