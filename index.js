const redux  = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'


// function buyCake is a action creator that will return the action
function buyCake() {
    return {
        type : BUY_CAKE,
        info : 'First redux action'
    }
}

function buyIceCream() {
    return {
        type : BUY_ICECREAM
    }
}


// (previousState, action) => newState

const cakeIntialState = {
    numOfCakes : 10,
}

const iceCreamInitialState = {
    numOfIceCreams : 20,
}

const cakeReducer = (state=cakeIntialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state=iceCreamInitialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}


const rootReducer = combineReducers ({
    cake : cakeReducer,
    iceCream : iceCreamReducer 
})
const store = createStore(rootReducer);
console.log('initial state', store.getState());
const unsubscribe = store.subscribe(()=> console.log('Updated state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubscribe();