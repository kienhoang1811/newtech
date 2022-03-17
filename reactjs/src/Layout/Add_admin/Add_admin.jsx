import React from "react";
import { Link } from "react-router-dom";
import "./Add_admin.css";
import { useEffect, useState } from "react";
function Add_admin(props) {

  const [username, setUsername] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

 
  return (
    <div class="center">
      <h1>Add admin</h1>
      <form method="post">
        <div class="field">
          <input type="text" name="username" onChange = {(e)=>setUsername(e.target.value)} required />
          <span></span>
          <label>Username</label>
        </div>
        <div class="field">
          <input type="text" name="phone"onChange = {(e)=>setPhone(e.target.value)} required />
          <span></span>
          <label>Phone number</label>
        </div>
        <div class="field">
          <input type="text" name="email" onChange = {(e)=>setEmail(e.target.value)} required />
          <span></span>
          <label>Email</label>
        </div>
        <div class="field">
          <input type="password" name="password" onChange = {(e)=>setPassword(e.target.value)} required />
          <span></span>
          <label>New Password</label>
        </div>
        <div class="field">
          <input type="password" name="confirmPassword" onChange = {(e)=>setConfirmPassword(e.target.value)} required />
          <span></span>
          <label>Confirm password</label>
        </div>

        <div>
          <input type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
}

export default Add_admin;
