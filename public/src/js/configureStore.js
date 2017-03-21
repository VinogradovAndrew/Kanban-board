import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers/index';
import createLogger from 'redux-logger';

const thunk = (store) => (next) => (action) =>
    typeof  action === 'function' ?
        action(store.dispatch) :
        next(action);


const configureStore = () => {
    const middlewares = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    const composeEnhancers =
        typeof window === 'object' &&
        process.env.NODE_ENV !== 'production' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares)
    );


    return createStore(
        reducer,
        enhancer)
};

export default configureStore;