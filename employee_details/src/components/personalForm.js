/* eslint-disable no-useless-constructor */
import React from "react";
import { withRouter } from "react-router-dom";
import { Input } from "./common/shared/input";
import 'react-calendar/dist/Calendar.css';
import { RadioGroup } from "./common/shared/radioGroup";
import actionTypes from "../actions/actionTypes";

class PersonalForm extends React.Component {

    constructor(props) {
        super(props);
    };

    handleEvent = (event) => {
        event.preventDefault();
        const { name, value } = event.target
        this.validate(name, value);
    }
    isFormValid = () => {
        let isValid = true;
        const { errors } = this.props.personalInfo;
        for (let propName in this.props.personalInfo) {
            this.validate(propName, this.props.personalInfo[propName])
        }
        for (let propName in errors) {
            if (errors[propName]) {
                isValid = false;
            }
        }
        return isValid;
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.isFormValid()) {
            const { personalInfo } = this.props;
            if (personalInfo.DOB !== null & personalInfo.gender !== null & personalInfo.maritalStatus !== null & personalInfo.homeAddress !== null & personalInfo.homeContactNumber !== null) {
                this.props.history.push('/employeeDetails');
            }
        }
    }
    validate = (name, value) => {
        switch (name) {
            case 'DOB':
                if (value == null || !value) {
                    this.props.setEmployeeDetails(actionTypes.SET_DOB_ERROR, null, 'DOB required is required !')
                }
                else {
                    this.props.setEmployeeDetails(actionTypes.SET_DOB, value);
                    this.props.setEmployeeDetails(actionTypes.SET_DOB_ERROR, null, null);
                }
                break;
            case 'gender':
                if (value == null || !value) {
                    this.props.setEmployeeDetails(actionTypes.SET_GENDER_ERROR, null, 'select your gender')
                }
                else {
                    this.props.setEmployeeDetails(actionTypes.SET_GENDER, value);
                    this.props.setEmployeeDetails(actionTypes.SET_GENDER_ERROR, null, null);
                }
                break;
            case 'maritalStatus':
                if (value == null || !value) {
                    this.props.setEmployeeDetails(actionTypes.SET_MARITAL_STATUS_ERROR, null, 'select your marital status')
                }
                else {
                    this.props.setEmployeeDetails(actionTypes.SET_MARITAL_STATUS, value);
                    this.props.setEmployeeDetails(actionTypes.SET_MARITAL_STATUS_ERROR, null, null);
                }
                break;
            case 'homeAddress':
                if (value == null || !value) {
                    this.props.setEmployeeDetails(actionTypes.SET_HOME_ADDRESS_ERROR, null, 'address is required !')
                }
                else if (value.length < 5) {
                    this.props.setEmployeeDetails(actionTypes.SET_HOME_ADDRESS_ERROR, null, "address must be 5 character long")
                }
                else {
                    this.props.setEmployeeDetails(actionTypes.SET_HOME_ADDRESS, value);
                    this.props.setEmployeeDetails(actionTypes.SET_HOME_ADDRESS_ERROR, null, null);
                }
                break;
            case 'homeContactNumber':
                if (value == null || !value) {
                    this.props.setEmployeeDetails(actionTypes.SET_HOME_CONTACT_NO_ERROR, null, 'contact number is required !')
                }
                else if (isNaN(parseInt(value)) & value.length !== 10) {
                    this.props.setEmployeeDetails(actionTypes.SET_HOME_CONTACT_NO_ERROR, null, 'contact number must be a number and should have length 10')
                } else {
                    this.props.setEmployeeDetails(actionTypes.SET_HOME_CONTACT_NO, value);
                    this.props.setEmployeeDetails(actionTypes.SET_HOME_CONTACT_NO_ERROR, null, null);
                }
                break;
            default:
                break;
        }
    }

    render() {
        const { personalInfo } = this.props;
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <Input type={'date'} name={'DOB'} value={personalInfo.DOB} error={personalInfo.errors.DOB} handleEvent={this.handleEvent}>Date Of Birth</Input>
                    <div className="radio-group">
                        <RadioGroup radioItems={['Male', 'Female', 'Other']} selectedValue={personalInfo.gender ? personalInfo.gender : ""} name="gender" handleEvent={this.handleEvent} error={personalInfo.errors.gender} >Gender</RadioGroup>
                    </div>
                    <div className="radio-group">
                        <RadioGroup radioItems={['married', 'unmarried']} selectedValue={personalInfo.maritalStatus ? personalInfo.maritalStatus : ""} name="maritalStatus" handleEvent={this.handleEvent} error={personalInfo.errors.maritalStatus} >Marital Status</RadioGroup>
                    </div>
                    <Input type={'text'} name={'homeAddress'} value={personalInfo.homeAddress} error={personalInfo.errors.homeAddress} handleEvent={this.handleEvent}>home Address</Input>
                    <Input type={'text'} name={'homeContactNumber'} value={personalInfo.homeContactNumber} error={personalInfo.errors.homeContactNumber} handleEvent={this.handleEvent}>home Contact No.</Input>
                    <div className='button-parent-div'>
                        <button type='submit' className='submit-button' onClick={(event) => this.handleSubmit(event)}>save</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default withRouter(PersonalForm);