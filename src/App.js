import React,{useReducer} from 'react'

// initialize intial state
const initialVal = 0;

// reducer function is define its call by dispatch function and dispatch call when use click btn
const reducer = (state,action) =>{
    switch(action.type){
        case'incre':
            return state+1;
        case 'decre':
            return state-1;
        default:
            return state
    }
}

function App(){
    const [count, dispatch] = useReducer(reducer, initialVal) //destructuring 

    // increment function calll when user click btn
    const increReducer = () =>{
        dispatch({type:'incre'})
    }
    // decrement function calll when user click btn
    const decreReducer = () =>{
        dispatch({type:'decre'})
    }
    return(
        <div>
            <center>
            <h1>Counter:{count}</h1>
            <button onClick={increReducer}>increment</button>
            <button onClick={decreReducer}>decrement</button>
            </center>
        </div>
    )
}

export default App;
