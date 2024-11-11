import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from './store/actions'

function App() {
  const isLoginSuccess = useSelector((state) => state.isLoginSuccess)
  const isLoginPending = useSelector((state) => state.isLoginPending)
  const loginError = useSelector((state) => state.loginError)
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailChange = (e) => {
    setEmail(event.target.value)
  }
  const passwordChange = (e) => {
    setPassword(event.target.value)
  }

  const doSubmit = (e) => {
    event.preventDefault()
    dispatch(login(email, password))
    setEmail('')
    setPassword('')
  }
  
  return (
    <div className='w-full text-center'>
      <h1 className='text-4xl'>Users Login</h1>
      <form name='loginForm' onSubmit={doSubmit}>
        <div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" name='email' onChange={emailChange} value={email} />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="text" name='password' onChange={passwordChange} value={password} />
          </div>
        </div>

        <input type="submit" value="Login" />

        <div className=''>
            {isLoginPending && <div><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif" alt="Loading..." /></div> }
            {isLoginSuccess && <div>Success....</div>}
            {loginError && <div>{loginError.message}</div>}
        </div>
      </form>
    </div>
  )
}

export default App
