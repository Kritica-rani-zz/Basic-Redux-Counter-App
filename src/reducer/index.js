import { INCREMENT, DECREMENT, RESET } from "../action/types";
const initialState = {
    counter: 0
}
export default function count(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + action.data,
            }
        case DECREMENT:
            if (state.counter === 0) {
                return {
                    ...state,
                }
            }
            return {
                ...state,
                counter: state.counter - action.data
            }
        case RESET:
            return {
                ...state,
                counter: 0,
            }

        default:
            return {
                ...state
            }
    }
}