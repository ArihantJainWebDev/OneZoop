import React from 'react'
import LordIcon from './LordIcon';

const Register = () => {
  return (
    <>
      <div className="login-form">
        <h2>Create your account</h2>
        <form>
          <div className="social-login">
            <button className="google-btn">
              <LordIcon
                src="https://cdn.lordicon.com/wstfgfud.json"
                trigger="hover"
                state="hover-draw"
                size={50}
              />
              Sign up with Google
            </button>
            <button className="github-btn">
              <LordIcon
                src="https://cdn.lordicon.com/lllcnxva.json"
                trigger="hover"
                size={50}
              />
              Sign up with GitHub
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />
          </div>

          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </>
  )
}

export default Register