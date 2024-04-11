import './login.scss'

const Login = () => {

 
  return (
    <div className='login'>
      <div className="top">
        <div className="wrapper">
          <img src="logo.jpg" alt="" className='logo'/>
          <button className='loginButton'>Sign up</button>
        </div>
      </div>
      <div className="container">
       <div className="signup">
        <h1>Sign In</h1>
        <input type="email" placeholder='Email or phone number'/>
        <input type="password" placeholder='Password'/>
        <button className='signinButton'>Sign In</button>
        <p>New to Movieflix? <span>Sign up now.</span></p>
        <small>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</small>
       </div>
      </div>
    </div>
  )
}

export default Login
