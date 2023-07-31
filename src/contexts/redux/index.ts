import {combineReducers, configureStore} from '@reduxjs/toolkit';
import portfolioReducer from './portfolio/reducer';

const rootReducer = combineReducers({
  portfolio: portfolioReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
