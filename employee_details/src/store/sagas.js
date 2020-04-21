import { put, call, takeEvery } from 'redux-saga/effects';
import { registerEmployee } from '../Api/employeeServices';
import actionTypes from '../actions/actionTypes';

function* storeEmployee(action) {

    const response = yield call(registerEmployee, action.payload);
    if (response.status && response.status === 200)
        yield put({ type: actionTypes.REGISTER_EMP_SUCCESS, payload: response });
    else
        yield put({ type: actionTypes.REGISTER_EMP_ERROR, payload: response.statusText || response });

}

export default function* watchEmployeeRegister() {
    yield takeEvery(actionTypes.REGISTER_EMP_REQUEST, storeEmployee)
}