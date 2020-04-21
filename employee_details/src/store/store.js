import { createStore, combineReducers, applyMiddleware } from 'redux';
import employment from '../Reducers/employeeReducer';
import personalInfo from '../Reducers/personalInfoReducer';
import apiResponse from '../Reducers/saveEmployeeReducer';
import createSagaMiddleware from 'redux-saga'
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(
    combineReducers(
        {
            employment,
            personalInfo,
            apiResponse
        }),
    {},applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);
export default store;