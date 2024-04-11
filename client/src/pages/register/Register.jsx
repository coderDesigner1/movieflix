import './register.scss'
import {useState, useRef} from 'react'

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () =>{
    setEmail(emailRef.current.value);
  }

  const handleFinish = () =>{
    setPassword(passwordRef.current.value);
  }

  return (
    <div className='register'>
      <div className="top">
        <div className="wrapper">
          <img src="logo.jpg" alt="" className='logo'/>
          <button className='loginButton'>Sign up</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited Movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>Ready to watch? Enter your email to create or restart your membership</p>
        
          {!email ? (<div className="input">
            <input type="email" placeholder='enter email' ref={emailRef} />
            <button className='registerButton' onClick={handleStart}>Get Started</button>
            </div>):(<div className="input">
            <input type="password" placeholder='enter password' ref={passwordRef} />
          <button className='registerButton' onClick={handleFinish}>Start</button>
          </div>)}         
        
      </div>
    </div>
  )
}

export default Register
