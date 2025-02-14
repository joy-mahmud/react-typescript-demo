import { useReducer } from "react"
type counterState = {
    count: number
}
type updateAction = {
    type: 'increment' | 'decrement'
    payload: number
}
type resetAction = {
    type: 'reset'
}
type counterAction = updateAction | resetAction
const intialState = { count: 0 }

function reducer(state: counterState, action: counterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return intialState
        default:
            return state
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, intialState)
    return (
        <div>
            <hr />
            <span>Count:{state.count}</span> <br />

            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>increment 10</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>decrement 10</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
    )
}

export default Counter