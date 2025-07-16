import React from 'react'
import LordIcon from "./LordIcon";

const Login = () => {
  return (
    <>
      <div className="login-form">
        <h2>Welcome back!</h2>
        <form>
          <div className="social-login">
            <button className="google-btn">
              <LordIcon
                src="https://cdn.lordicon.com/wstfgfud.json"
                trigger="hover"
                state="hover-draw"
                size={50}
              />Login with google</button>
            <button className="github-btn"><LordIcon
              src="https://cdn.lordicon.com/lllcnxva.json"
              trigger="hover"
              size={50} />Login with github</button>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <div className="links">
            <p className="form-link">
              Don't have an account? <a href="/register">Register here</a>
            </p>
            <p className="form-link">
              Forgot your password? <a href="/reset-password">Reset it</a>
            </p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
