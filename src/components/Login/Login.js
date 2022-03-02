import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Login.css';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
//import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
//import { useForm } from 'react-hook-form';

    

const Login = () => {
    
    
    const [user, setUser] = useState([]);

    const {signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleBlur = (e) =>{
        console.log('clicked');
        let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user};
     // console.log(newUserInfo);
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);

    }
    }
    

    const handleSubmit = (e) =>{
        console.log('submit clicked');
        const auth = getAuth();
        const email = user.email;
        const password = user.password;
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const newUserInfo = { ...user, isSignedIn: true };
        //console.log(newUserInfo);
        setUser(newUserInfo);
        history.push(redirect_uri);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Sorry, ${errorCode} Try again`);
        console.log(errorMessage);
        console.log(errorCode);
      });      
      e.preventDefault(); 
    }
    
    // console.log(location.state?.from);
    const redirect_uri = location.state?.from || '/';

    

    const handleGoogleSignIn= () =>{
        
        signInUsingGoogle()
        .then((result) => {
            setUser(result.user);
            history.push(redirect_uri);
        })
    }

    return (

        <div className="d-grid justify-content-center mt-5 ">
            <div className="login-form shadow mt-3 pt-5 mb-5 bg-body rounded " style={{width: '550px', height:'450px',padding:'25px'}}>
                <Form onSubmit={handleSubmit} >
                    <h5 className="">Sign In With Your Email and Password</h5><br />
                    <Form.Group controlId="formGroupEmail" onBlur={handleBlur}>
                        <Form.Control type="email" name="email" style={{ fontFamily: 'FontAwesome' }} placeholder="&#x10f0e0; Enter your email address" />
                    </Form.Group> <br />
                    <Form.Group controlId="formGroupPassword" onBlur={handleBlur}>
                        <Form.Control type="password" name="password" className="form-icon" placeholder="&#xf30d; Enter Your Password" />
                    </Form.Group> <br />

                    <div className="row ">
                        <div className="col-md-5 d-flex justify-content-start align-content-center my-auto">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault"><small className="checkbox">Remember me</small>
                                </label>
                            </div>
                        </div>
                        <div className="col-md-7 d-flex justify-content-end my-auto">
                            <a href="#"><span>Forgot Password</span></a>
                        </div>
                    </div>


                    <br /> <br /> 
                    <Form.Group className="justify-content-center d-flex gap-3" >

                        <input className="submit-btn btn login-btn" style={{color:'white', backgroundColor:'cadetblue'}} type="submit" value='Sign In' />
                        <br />
                        <button onClick={handleGoogleSignIn} style={{backgroundColor:'tomato'}} className="btn btn-spcl"><FontAwesomeIcon icon={faGoogle} size='2x' /></button>
                    </Form.Group>
                </Form><br />
                <div className="d-flex justify-content-center gap-3 ">
                    
                
                {/* <button className="btn login-btn "><FontAwesomeIcon icon={faFacebookF} size='2x' /></button>
                <button className="btn login-btn "><FontAwesomeIcon icon={faGithub} size='2x' /></button><br /> */}
                </div>
            </div>
        </div>
    );
};

export default Login;