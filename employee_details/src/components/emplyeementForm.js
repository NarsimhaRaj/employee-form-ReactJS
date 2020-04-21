/* eslint-disable no-useless-constructor */
import React from "react";
import { withRouter } from "react-router-dom";
import actionTypes from "../actions/actionTypes";
import { Input } from "./common/shared/input";
class EmployeementForm extends React.Component {

    constructor(props) {
        super(props);
    }

    handleEvent = (event) => {
        event.preventDefault();
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
        this.validate(name, value);
    }
    isFormValid = () => {
        let isValid = true;

        for (let propName in this.props.empForm) {
            this.validate(propName, this.props.empForm[propName])
        }
        for (let propName in this.props.empForm.errors) {
            if (this.props.empForm.errors[propName] !== null) {
                return false;
            }
        }
        return isValid;
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.isFormValid()) {
            const { empForm } = this.props;
            if (empForm.employeeId !== null & empForm.employeeName !== null & empForm.companyName !== null & empForm.companyAddress !== null & empForm.contactNumber !== null & empForm.email !== null & empForm.designation !== null) {
                this.props.history.push('/personalInfo');
            }
        }
    }
    validate = (name, value) => {
        switch (name) {
            case 'employeeId':
                if (value == null || !value) {
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_ID_ERROR, null, 'employeeId required !')
                }
                else if (isNaN(parseInt(value))) {
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_ID_ERROR, null, "employeeId must be a number")
                }
                else {
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_ID, value);
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_ID_ERROR, null, null)
                }
                break;
            case 'employeeName':
                if (value == null || !value) {
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_NAME_ERROR, null, 'name is required !')
                }
                else if (value.length < 3) {
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_NAME_ERROR, null, "name must be 3 character long")
                }
                else {
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_NAME, value);
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_NAME_ERROR, null, null)
                }
                break;
            case 'companyAddress':
                if (value == null || !value) {
                    this.props.setEmployeeDetails(actionTypes.SET_COMP_ADDRESS_ERROR, null, 'address is required !')
                }
                else if (value.length < 5) {
                    this.props.setEmployeeDetails(actionTypes.SET_COMP_ADDRESS_ERROR, null, "address must be 5 character long")
                }
                else {
                    this.props.setEmployeeDetails(actionTypes.SET_COMP_ADDRESS, value);
                    this.props.setEmployeeDetails(actionTypes.SET_COMP_ADDRESS_ERROR, null, null);
                }
                break;
            case 'email':
                if (value == null || this.validateEmail(value)) {
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_EMAIL_ERROR, null, 'Email is not valid!');
                }
                else {
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_EMAIL, value);
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_EMAIL_ERROR, null, null);
                }
                break;
            case 'contactNumber':
                if (value == null || !value) {
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_CONTACT_NO_ERROR, null, 'contact number is required !');
                }
                else if ((isNaN(parseInt(value)) || value.length !== 10)) {
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_CONTACT_NO_ERROR, null, 'contact number must be a number and should have');
                }
                else {
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_CONTACT_NO_ERROR, null, null);
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_CONTACT_NO, value);
                }
                break;
            case 'companyName':
                if ((value == null || !value)) {
                    this.props.setEmployeeDetails(actionTypes.SET_COMP_NAME_ERROR, null, 'company name is required !');
                }
                else {
                    this.props.setEmployeeDetails(actionTypes.SET_COMP_NAME_ERROR, null, null);
                    this.props.setEmployeeDetails(actionTypes.SET_COMP_NAME, value);
                }
                break;
            case 'designation':
                if (value == null || !value) {
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_DESIGNATION_ERROR, null, 'designation is required !')
                }
                else if (value.length < 3) {
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_DESIGNATION_ERROR, null, "designation must be 3 character long")
                }
                else {
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_DESIGNATION, value);
                    this.props.setEmployeeDetails(actionTypes.SET_EMP_DESIGNATION_ERROR, null, null)
                }
                break;

            default:
                break;
        }
    }

    validateEmail = (email) => {
        if (!email) return true;
        if (email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
            return false;
        }
        return true;
    }

    render() {
        const { empForm } = this.props;

        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <Input type={'text'} name={'employeeId'} value={empForm.employeeId} error={empForm.errors.employeeId} handleEvent={this.handleEvent}>employee Id</Input>
                    <Input type={'text'} name={'employeeName'} value={empForm.employeeName} error={empForm.errors.employeeName} handleEvent={this.handleEvent}>employee Name</Input>
                    <Input type={'text'} name={"companyName"} value={empForm.companyName} error={empForm.errors.companyName} handleEvent={this.handleEvent}>company Name</Input>
                    <Input type={'text'} name={'companyAddress'} value={empForm.companyAddress} error={empForm.errors.companyAddress} handleEvent={this.handleEvent}>company Address</Input>
                    <Input type={'text'} name={'contactNumber'} value={empForm.contactNumber} error={empForm.errors.contactNumber} handleEvent={this.handleEvent}>company Contact No.</Input>
                    <Input type={'text'} name={"designation"} value={empForm.designation} error={empForm.errors.designation} handleEvent={this.handleEvent}>Designation</Input>
                    <Input type={'email'} name={'email'} value={empForm.email} error={empForm.errors.email} handleEvent={this.handleEvent}>email</Input>

                    <div className='button-parent-div'>
                        <button type='submit' className='submit-button' onClick={(event) => this.handleSubmit(event)}>save</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default withRouter(EmployeementForm);