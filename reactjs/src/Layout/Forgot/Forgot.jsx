import React from "react";
import "./Forgot.css";
import { useEffect, useState } from "react";

function Forgot(props) {
  const [username, setUsername] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  
  return (
    <div class="center">
      <h1>Forgot Password</h1>
      <form method="post">
        <div class="field">
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <span></span>
          <label>Username</label>
        </div>
        <div class="field">
          <input
            type="text"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <span></span>
          <label>Phone number</label>
        </div>
        <div class="field">
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span></span>
          <label>Email</label>
        </div>
        <div class="field">
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span></span>
          <label>New Password</label>
        </div>
        <div class="field">
          <input
            type="password"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span></span>
          <label>Confirm password</label>
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>

        {/* <!-- <div>
            <button class="register">
              <a href="../html/login.html">Reset Password</a>   
            </button>
          </div> --> */}
      </form>
    </div>
  );
}

export default Forgot;
