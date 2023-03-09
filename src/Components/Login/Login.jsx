import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { auth } from '../../Firebase/firebase';
import authErrors from '../../Firebase/authError';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useAuthState } from 'react-firebase-hooks/auth';


const CurrentUser = ()=>{
  
}

 
const Login = () => {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
      email: "",
      password: ""
    })
    const handleChange = (e)=>{
      const {name,value} = e.target;
      setFormData(prevValue => {
        return (
          {
            ...prevValue,
            [name]: value
          }
        )
      })
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      signInWithEmailAndPassword(auth,formData.email,formData.password)
      .then((userCred) =>{
        toast.success("Login Successful. Redirecting in 5 sec",{
          position: toast.POSITION.TOP_CENTER
        })
          setTimeout(() => {
            navigate("/");
          }, 6000);
        // const user = userCred.user;
        // console.log(user);
      })
      .catch((err)=>{
        const errCode = err.code;
        const errorMessage = (authErrors[`${errCode}`]);
        toast.error(errorMessage,{
          position: toast.POSITION.TOP_CENTER
        })
      })


      // console.log(formData);
    }
    return(
        <MDBContainer fluid className="p-3 my-5">
      <form onSubmit={handleSubmit}>
      
          <MDBRow>
            <MDBCol col='10' md='6'>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
            </MDBCol>
            <MDBCol col='4' md='6'>
              <MDBInput wrapperClass='mb-4' placeholder='Email address'  type='email' size="lg" name='email' value={formData.email} onChange = {handleChange}/>
              <MDBInput wrapperClass='mb-4' placeholder='Password'  type='password' size="lg" name = "password" value = {formData.password} onChange = {handleChange}/>
              <div className="d-flex justify-content-between mx-4 mb-4" >
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>
              <MDBBtn className="mb-4 w-100" size="lg">Sign in</MDBBtn>
              <Link to = "/register">
                <MDBBtn className="mb-4 w-100" size="lg">Sign up</MDBBtn>

              </Link>


            </MDBCol>

            
          </MDBRow>
          <ToastContainer autoClose = {5000}/>
        </form>
        <Link to = {'/registration'}>
          <MDBBtn className="mb-4 w-100" size="lg">Sign Up</MDBBtn>

        </Link>

        </MDBContainer>
    )
}

export default Login