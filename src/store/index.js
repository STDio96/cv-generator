import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'

// importing reducers
import firstStep from '../ducks/firstStep'
import formData from '../ducks/formsData'
// import secondStep from './ducks/secondStep'
// import thirdStep from './ducks/thirdStep'

const rootReducer = combineReducers({
    firstStep,
    // formData,
    // secondStep,
    // thirdStep,
});

// const rootReducer = firstStep;

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const store = createStore(rootReducer, undefined, composeEnhancers(applyMiddleware(thunkMiddleware)));

store.subscribe(store => {
    console.log('store changed', store)
})

export default store;