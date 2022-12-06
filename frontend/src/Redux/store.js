import { createStore, combineReducers } from "redux";
// import logger from "redux-logger";
// import thunk from 'redux-thunk';
import auth from "./Reducers/auth";
// import view_receipts from "./reducers/view_receipts";
// import promote_students from "./reducers/promote_students";

const rootReducer = combineReducers({
  auth,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk,logger))
// );

const store = createStore(rootReducer);

export default store;