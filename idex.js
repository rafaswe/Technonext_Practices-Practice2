const { createStore } = require("redux");

// Defining Constent 
const INCREAMENT ="INCREAMENT"
const DECREAMENT ="DECREAMENT"
const RESET ="RESET"
const ADD_USER ="ADD_USER"
const INCREAMENT_BY_VALUE = "INCREAMENT_BY_VALUE"

//State


const initialCounterState= {
    counter:0,
}

const initialUsersState= {
    users:["rafa"],
    count: 1,
};


//Actions
// Increament Counter, decreament counter. 
// Action is a object. It requires two type of feilds. 
// (1) Action Type.
// (2) Action Payload.

const increamentCounter=()=>{
    return{
        type: INCREAMENT,
    }
}

const decreamentCounter=()=>{
    return{
        type: DECREAMENT,
    }
}
const reset=()=>{
    return{
        type: RESET,
    }
}

const increametCounterByValue=(value)=>{
    return{
        type: INCREAMENT_BY_VALUE,
        payload: value,
    }
}

const addUser=(user)=>{
    return{
        type: ADD_USER,
        payload:user,
    }
}



// create reducer for counter.
// Reducer is a pure function that takes input and returns value 
// we will recieve two things. One is a state and another one is action

const counterReducer=(state=initialCounterState,action)=>{

    switch(action.type){
        case INCREAMENT:
            return{
              ...state,
                counter:state.counter+1
            }
            break;
            
        case DECREAMENT:
            return{
             ...state,
                counter:state.counter-1
            }
            break;
        case RESET:
            return{
                ...state,
                counter:0,
            }
            break;
        case INCREAMENT_BY_VALUE:
            return{
                ...state,
                counter: state.counter + action.payload,
            }
            break;
        default:
            return state;
            
    }
}



const addUserReducer = (state=initialUsersState, action) =>{
    switch(action.type){
        case ADD_USER:
            return{
                users: [...state.users, action.payload],
                count:state.count+1,
            }
            break;
        default:
                return state;
}
}



//store 
// const store - getState(), dispatch(), subscribe()

//create store
const store1 = createStore(counterReducer)
store1.subscribe(()=>{
    console.log(store1.getState());
})

const store2 = createStore(addUserReducer)
store2.subscribe(()=>{
    console.log(store2.getState());
})

//dispatch action
// store1.dispatch(increamentCounter())
// store1.dispatch(increamentCounter())
// store1.dispatch(increamentCounter())
// store1.dispatch(decreamentCounter())

store2.dispatch(addUser("mahiya"));