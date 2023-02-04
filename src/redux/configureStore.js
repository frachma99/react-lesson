import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
// import createSagaMiddleware from "@redux-saga/core";

// import userReducer from "./ducks/userReducer";
import counterReducer from "./ducks/counterReducer";
import counterSlice from "./ducks/counterSlice";
// import { watcherSaga } from "./saga/rootSaga";
// import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  counter: counterSlice,
  // user: userReducer,
});

// const sagaMiddleware = createSagaMiddleware();
// const middleware = [sagaMiddleware];

// const store = createStore(reducer, compose(applyMiddleware(thunk)));
// const store = createStore(reducer, {}, applyMiddleware(...middleware));
const store = configureStore({
  reducer,
  middleware: [thunk],
});

// sagaMiddleware.run(watcherSaga);

export default store;
