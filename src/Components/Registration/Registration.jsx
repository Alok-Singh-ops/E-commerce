import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase/firebase';
import authErrors from '../../Firebase/authError';
import "./style.css"
import { createUserWithEmailAndPassword} from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {
        MDBBtn,
        MDBContainer,
        MDBRow,
        MDBCol,
        MDBCard,
        MDBCardBody,
        MDBCardImage,
        MDBInput,
        MDBIcon,
        MDBCheckbox
    }
    from 'mdb-react-ui-kit';




function Registration() {
    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })




    const handleChange = (event)=>{
        const {name,value,type} = event.target;
        setFormData(prevFormData=>{
            return ({
                ...prevFormData,
                [name]: value
            })
        })
    }

    //Function to match the error code and return the error message from ../../Firebase/authError

   


    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        await createUserWithEmailAndPassword(auth,formData.email,formData.password)
            .then((userCred)=>{
                const user = userCred.user;
                toast.success("Sign Up successfully. Please redirect to homepage to login. You will be redirected to home page in 5 secs",{
                    position: toast.POSITION.TOP_RIGHT
                })
                console.log(user);

                setTimeout(()=>{
                    navigate("/")
                },6000)
            })
            .catch((err)=>{
                const errCode = err.code;
                const errorMessage = (authErrors[`${errCode}`]);
                // console.log(errCode);
                // console.log(errorMessage);
                toast.error(errorMessage, {
                    position: toast.POSITION.TOP_RIGHT
                  });
                // console.log(err.code);
            })


        // console.log(formData);
    }

        // console.log(formData);
    return (
        <div className="registration-form">
        <form action="" onSubmit={handleSubmit}>
            <MDBContainer fluid>  
            <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
            <MDBCardBody>
                <MDBRow>
                    <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <div className="d-flex flex-row align-items-center mb-4 ">
                        <MDBIcon fas icon="user me-3" size='lg'/>
                        <MDBInput  id='form1' type='text' className='w-100' placeholder='Name' onChange={handleChange} name = 'name' value={formData.name}/>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                        <MDBIcon fas icon="envelope me-3" size='lg'/>
                        <MDBInput id='form2' type='email' placeholder = 'E-Mail' onChange={handleChange} name = 'email' value={formData.email}/>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <MDBIcon fas icon="lock me-3" size='lg'/>
                        <MDBInput placeholder='Password' id='form3' type='password' onChange={handleChange} name = 'password' value={formData.password}/>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-4">
                        <MDBIcon fas icon="key me-3" size='lg'/>
                        <MDBInput placeholder='Repeat your password' id='form4'             type='password' onChange={handleChange} name = "confirmPassword" value={formData.confirmPassword}/>
                    </div>

            <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>
            </MDBCol>
            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>
        </MDBRow>
        </MDBCardBody>
    </MDBCard>
        <ToastContainer autoClose = {5000}/>
    </MDBContainer>

        </form>

        </div>
    );
    }

    export default Registration;