import { INCREMENT,DECREMENT,RESET } from "./types";
export function increment(){
    return{
        type:INCREMENT,
        data:1
    }
}
export function decrement(){
    return {
        type:DECREMENT,
        data:1
    }
}
export function reset(){
    return{
        type:RESET,
        data:0
    }
}
