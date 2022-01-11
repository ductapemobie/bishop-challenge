import '../style/Chess.css';

export default function ChessSquare(props){
    const squareColor = props.color;//blue or white
    const row = props.row;
    const col = props.col;
    const squareLeftClicked = props.squareLeftClicked;
    const squareRightClicked = props.squareRightClicked;
    const rowMapping = ['8', '7', '6', '5', '4', '3', '2', '1'];
    const colMapping = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const coords = ((col===0)?rowMapping[row]:"")+((row===7)?colMapping[col]:"");
    let retDiv = <div></div>

    function rightMouseClick(e){
        e.preventDefault();
        handleClick('right');
    }

    function handleClick(type){
        if (type === 'left'){
            squareLeftClicked(row, col);
        }else{
            squareRightClicked(row, col);
        }
    }

    retDiv = <div className={`${squareColor}-square noselect`} 
        onClick={()=>handleClick('left')}
        onContextMenu={rightMouseClick}>{coords}
    </div>


    return retDiv;
}