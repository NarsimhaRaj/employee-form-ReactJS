import actionType from "../actions/actionTypes";

function saveEmployeeReducer(state = {message:"",data:{}}, action) {
    switch (action.type) {
        case actionType.REGISTER_EMP_REQUEST:
            return  { ...state, message: "register service requested", data:action.payload };
        case actionType.REGISTER_EMP_SUCCESS:
            return  { ...state, message: "employee registration success", data:action.payload };
        case actionType.REGISTER_EMP_ERROR:
            return  { ...state, message: "employee registration failed", data:action.payload };
        default:
            return state;
    }
}

export default saveEmployeeReducer;