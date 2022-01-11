export default function NumberInput(props){
    const setMoveCount = props.setMoveCount;

    function updateNumber(event){
        const val = event.target.value;
        console.log(val);
        setMoveCount(val);
    }

    return <div><input type='number' className="number-input" onChange={updateNumber}/></div>
}