//similar to chess board, but for displaying the path instead of inputting values

export default function DisplayBoard(props){
    const answerState = props.answerState;

    return <>
    {answerState===true?
    <h1>This is possible</h1>
    :
    <h1>This is Not possible</h1>
    }
    </>
}