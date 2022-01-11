export default function NumberInput(props){
    const setMoveCount = props.setMoveCount;

    function updateNumber(event){
        const val = event.target.value;
        setMoveCount(val);
    }

    return <div className="center-item">
        Number of Moves
        <input type='number' className="number-input" onChange={updateNumber}/>
    </div>
}