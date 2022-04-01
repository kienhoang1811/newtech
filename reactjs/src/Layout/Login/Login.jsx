import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Login.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  useHistory,
} from 'react-router-dom'

function Login(props) {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const history = useHistory()

  useEffect(() => {
    console.log('123')
    // getData()
  }, [])

  const getData = async () => {
    const res = await axios.get('http://localhost:4000')
    console.log(res.data)
  }

  useEffect(() => {
    console.log(username)
    console.log(password)
  }, [username, password])

  const loginHandler = async (e) => {
    e.preventDefault()
    // alert(username)
    // alert()
    if (!username || username.length < 5) return alert('username khong hop le')
    if (!password || password.length < 5) return alert('password khong hop le')

    const body = {
      username,
      password,
    }

    try {
      const res = await axios.post('http://localhost:4000/system/login', body)
      console.log('login successfully', res.data)

      if (!res.data || !res.data.account) return
      const { account } = res.data
      console.log(
        '🚀 ~ file: Login.jsx ~ line 42 ~ loginHandler ~ account',
        account,
      )

      saveLocalStorage(account)
    } catch (error) {
      console.log(error)
    }
  }

  const saveLocalStorage = (account) => {
    localStorage.setItem('account', JSON.stringify(account))

    history.push('/dashboard')
  }

  return (
    <div className="center">
      <h1>Signin</h1>
      <form method="post" onSubmit={loginHandler}>
        <div className="field">
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <span></span>
          <label>Username</label>
        </div>
        <div className="field">
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span></span>
          <label>Password</label>
        </div>
        {/* <Link to="/dashboard"><div className="signin_link"><button className="b_signin">Sign In</button> </div></Link> */}
        <div className="signin_link">
          <button className="b_signin">Sign In</button>
        </div>
        <br></br>
        <br></br>
        <div className="pass">
          {/* <Link to="/forgot-password">Forgot Password?</Link> */}
        </div>
      </form>
    </div>
  )
}

export default Login
