import { connect } from 'react-redux';
import EmployeeDetails from '../components/employeeDetails'
import { registerEmployee } from '../actions/employeeActions';

const mapStatetoProps = (state) => {
    return {
        empForm: state.employment,
        personalInfo: state.personalInfo,
        apiResponse: state.apiResponse
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveEmployeeDetails: (actionType, data) => {
            dispatch(registerEmployee(actionType, data));
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(EmployeeDetails);