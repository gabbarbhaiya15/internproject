// Signup.js
import React from 'react';
import signupimage from '../Image/image5.png';
import '../Style/Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ closePopup }) => {
  return (
    <div className='popup-overlay'>
      <div className='popup-content container' id='signup-box'>
        <button className='close-button' onClick={closePopup}>X</button>
        <div className='row text text-success p-2 d-flex justify-content-around' id="row_1">
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </div>
        <div className='row row-cols-2 d-flex justify-content-between mt-1'>
          <div className='col'>
            <div className="container p-4 shadow-sm">
              <h2>Sign In</h2>
              <form>
              
                <div className="form-group mb-3">
                  <input type="email" className="form-control" id="formEmail" placeholder="Email" />
                </div>
                <div className="form-group mb-3">
                  <input type="password" className="form-control" id="formPassword" placeholder="Password" />
                </div>
               
                <button type="submit" className="btn btn-primary w-100 rounded-pill">Sign In</button>
                <div className="text-center my-3">or</div>
                <button type="button" className="btn btn-outline-primary w-100 mb-2 d-flex justify-content-center align-items-center">
                  <img width="28" height="28" src="https://img.icons8.com/color/48/facebook-circled--v1.png" alt="facebook-circled--v1" /> Sign up with Facebook
                </button>
                <button type="button" className="btn btn-outline-danger w-100 d-flex justify-content-center align-items-center">
                  <img width="28" height="28" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" /> Sign up with Google
                </button>
              </form>
            </div>
          </div>
          <div className='col'>
            <div className='container p-2 d-flex flex-column justify-content-around'>
              <div className='row d-flex justify-content-end pr-2' id="texts"> Don’t have an account yet? Create new for free! </div>
              <div className='row'>
                <img height={250} src={signupimage} alt='' />
              </div>
              <div className='row' id="texts">By signing up, you agree to our Terms & conditions, Privacy policy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
