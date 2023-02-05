import React, { useEffect, useState, useRef } from "react";
import './RequestAccess.css';

import { useNavigate } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';


/* eslint-disable jsx-a11y/iframe-has-title */
const requestAccessScreen = () => {
    let navigate = useNavigate();
    const form = useRef();
    const initialValues = { First_Name: '', Last_Name: '', Company_Name: '', Role: '', Phone_Number: '', Email_Address: '' }
    const [formValues, setFormValues] = React.useState(initialValues)
    const [formErrors, setFormErrors] = React.useState({})
    const [isSubmit, setIsSubmit] = React.useState(false)
    const [alertMsg, setAlertMsg] = React.useState('')
    const [showAlert, setShowAlert] = React.useState(false)
    const [oneTimeExe, setOneTimeExe] = React.useState(false)
    const [alertWrongMsg, setAlertWrongMsg] = React.useState('')
    const [showWrongAlert, setShowWrongAlert] = React.useState(false)
    const [isClickedOnSubmit, setisClickedOnSubmit] = React.useState(false)

    const submitSuccess = (event) => {
        window.scrollTo(0, 0)
        event.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true)
        setOneTimeExe(true)
    }

    const validate = (values) => {
        const errors = {}
        const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        const specialChars = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
        values.First_Name = values.First_Name.trim();
        if (!values.First_Name) {
            errors.First_Name = 'First Name is required!'
        } else if (!values.First_Name.match(/^[a-zA-Z`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~\s]*$/)) {
            errors.First_Name = "First name should not contain any numbers"
        }
        values.Last_Name = values.Last_Name.trim();
        if (!values.Last_Name) {
            errors.Last_Name = 'Last Name is required!'
        } else if (!values.Last_Name.match(/^[a-zA-Z`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~\s]*$/)) {
            errors.Last_Name = "Last name should not contain any numbers"
        }
        values.Company_Name = values.Company_Name.trim();
        if (!values.Company_Name) {
            errors.Company_Name = 'Company Name is required!'
        }
        values.Role = values.Role.trim();
        if (!values.Role) {
            errors.Role = 'Role is required!'
        }
        values.Phone_Number = values.Phone_Number.trim();
        if (!values.Phone_Number.match(/^[ 0-9`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]*$/)) {
            errors.Phone_Number = "Phone number should not contain any alphabets"
        }
        else if (values.Phone_Number.length > 25) {
            errors.Phone_Number = 'Phone Number length must be less than 25 characters'
        }
        values.Email_Address = values.Email_Address.trim();
        if (!values.Email_Address) {
            errors.Email_Address = 'Email address is required!'
        } else if (!regex.test(values.Email_Address)) {
            errors.Email_Address = 'Invalid email address!'
        }
        return errors
    }


    const setInputValues = (event) => {
        const { name, value } = event.target
        setFormValues({ ...formValues, [name]: value })
        setShowWrongAlert(false)
    }




    useEffect(() => {
        if (oneTimeExe) {
            setOneTimeExe(false)
            if (Object.keys(formErrors).length === 0 && isSubmit) {
                try {
                    setisClickedOnSubmit(true)
                    fetch("http://192.168.0.13:7000/APIConnection/Post/CreateClientDetails", {
                        headers: auth,
                        method: 'POST',
                        headers1: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            clientname: formValues.Client_Name,
                            company: formValues.Company_Name,
                            email: formValues.Email_Address.toLowerCase(),
                            phone: formValues.Phone_Number,
                        })
                    })
                        .then((response) => response.json())
                        .then((response) => {
                            if (response === 0) {
                                setShowWrongAlert(false)
                                setAlertMsg("Your request has been forwarded to the admin for approval");
                                setShowAlert(true)
                                sendMailToAdmin()
                                setisClickedOnSubmit(false)
                            }
                            else if (response === -1) {
                                setAlertWrongMsg("Something went wrong please try after some time");
                                setShowWrongAlert(true)
                                setisClickedOnSubmit(false)
                            }
                            else if (response === -2) {
                                setAlertWrongMsg("User email address already exist");
                                setShowWrongAlert(true)
                                setisClickedOnSubmit(false)
                            }
                        })
                        .catch((error) => {
                            console.log("error in useEffect inside reqAcc: ", error)
                            setAlertWrongMsg("Server is unreachable, Please try after sometime");
                            setShowWrongAlert(true)
                            setisClickedOnSubmit(false)
                        }
                        )
                }
                catch (error) {
                    console.log("error in useEffect inside reqAcc1: ", error)
                    setAlertWrongMsg("Something went wrong, Please try after sometime");
                    setShowWrongAlert(true)
                    setisClickedOnSubmit(false)
                }
            }
        }
    }, [formErrors, formValues.Company_Name, formValues.Email_Address, formValues.First_Name, formValues.Last_Name, formValues.Phone_Number, formValues.Role, isSubmit, navigate, oneTimeExe])


    return (
        <div className="w-100vw h-100vh row m-0">
            <div className="col-sm-12 col-md-6 py-5 ">
                <div className="col-12   d-flex justify-content-center w-100" >
                    <div className="logo-reqAccess"></div>
                </div>
                <div className="col-12 fs-2 heading" id="thanks" style={{ marginLeft: '5%' }}>Thanks for choosing us</div>  <br />
                {
                    showAlert ? <div className="alert alert-success" id="alertStyle">{alertMsg}</div> : null
                }
                {
                    showWrongAlert ? <div className="alert alert-danger" id="alertStyle">{alertWrongMsg}</div> : null
                }
                <form ref={form} onSubmit={submitSuccess} style={{ padding: '2%' }} id="formfamily">
                    <div className="row spacing" >
                        <div className="col-md-5">
                            <label htmlFor="First Name" className="form-label">
                                First Name <span style={{ color: '#F68324' }}>*</span>
                            </label>
                            <input
                                maxLength={100}
                                placeholder="First Name"
                                className="form-control width1"
                                style={{ lineHeight: '2.5' }}
                                id="firstName"
                                name='First_Name'
                                value={formValues.First_Name}
                                onChange={setInputValues}
                            />
                            <p id="red">{formErrors.First_Name}</p>
                            <label htmlFor="compnay" className="form-label">
                                Company Name <span style={{ color: '#F68324' }}>*</span>
                            </label>
                            <input
                                maxLength={150}
                                placeholder="Company Name"
                                className="form-control"
                                style={{ lineHeight: '2.5' }}
                                id="company"
                                name='Company_Name'
                                value={formValues.Company_Name}
                                onChange={setInputValues}
                            />
                            <p id="red">{formErrors.Company_Name}</p>
                            <label htmlFor="phone" className="form-label">
                                Phone Number
                            </label>
                            <input
                                maxLength={20}
                                className="form-control"
                                style={{ lineHeight: '2.5' }}
                                id="phone"
                                // type="number"
                                placeholder="Phone Number"
                                name='Phone_Number'
                                value={formValues.Phone_Number}
                                onChange={setInputValues}
                            />
                            <p id="red">{formErrors.Phone_Number}</p>
                            <p></p>
                            <br></br>
                            <button className="text-light fw-bold btn btn-warning px-5 py-2" type="submit" id="submitButton" disabled={showAlert} style={{ background: '#F68324', lineHeight: '2.5' }}>
                                {
                                    isClickedOnSubmit ?
                                        <div className='divsection1' style={{ marginLeft: '45%' }}>

                                        </div>
                                        :
                                        "Submit"
                                }
                            </button>
                            <div className="col-md-12 d-flex justify-content-center" style={{ marginTop: '15px' }}><Link to="/"><i className="fa-solid fa-circle-arrow-left"></i> Back to Login</Link></div>
                        </div>

                        <div className="col-md-5">
                            <label htmlFor="Last Name" className="form-label">
                                Last Name <span style={{ color: '#F68324' }}>*</span>
                            </label>
                            <input
                                maxLength={100}
                                placeholder="Last Name"
                                className="form-control"
                                style={{ lineHeight: '2.5' }}
                                id="lastName"
                                name='Last_Name'
                                value={formValues.Last_Name}
                                onChange={setInputValues}
                            />
                            <p id="red">{formErrors.Last_Name}</p>
                            <label htmlFor="role" className="form-label">
                                Role <span style={{ color: '#F68324' }}>*</span>
                            </label>
                            <input
                                maxLength={100}
                                placeholder="Role"
                                className="form-control"
                                style={{ lineHeight: '2.5' }}
                                id="role"
                                name='Role'
                                value={formValues.Role}
                                onChange={setInputValues}
                            />
                            <p id="red">{formErrors.Role}</p>
                            <label htmlFor="email" className="form-label">
                                Email Address <span style={{ color: '#F68324' }}>*</span>
                            </label>
                            <input
                                maxLength={100}
                                type="email"
                                placeholder="Email Address"
                                className="form-control"
                                style={{ lineHeight: '2.5' }}
                                id="email"
                                name='Email_Address'
                                value={formValues.Email_Address}
                                onChange={setInputValues}
                            />
                            <p id="red">{formErrors.Email_Address}</p>

                        </div>

                    </div>


                    <div>

                    </div>
                </form>
            </div>
        </div>

    );
};
export default requestAccessScreen;

