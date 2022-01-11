export default function TextInputs(props){
    const setState = props.setState;
    const type = props.type;
    const colMap = {'a':0, 'b':1, 'c':2, 'd':3, 'e':4, 'f':5, 'g':6, 'h':7};
    const rowMap = {'8':0, '7':1, '6':2, '5':3, '4':4, '3':5, '2':6, '1':7};

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

    return <div className="center-item">{type} Square <input type='text' onChange={textChanged} maxLength={2}></input></div>
}


/*<div className='center-item'>
        <div>Starting Square <input type='text' onChange={startTextChanged} maxLength={2}></input></div>
        <div>Ending Square <input type='text' onChange={endTextChanged} maxLength={2}></input></div>
    </div>*/