import React from "react";
import { Link } from "react-router-dom";
import "./Add_user.css";
import { useEffect, useState } from "react";

function Add_user(props) {
  const [username, setUsername] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [address, setAdress] = useState(null);
  const [city, setCity] = useState(null);
  return (
    <div class="center">
      <h1>Add User</h1>
      <form method="post">
        <div class="field">
          <input type="text" name="username" onChange = {(e)=>setUsername(e.target.value)}  required />
          <span></span>
          <label>Username</label>
        </div>
        <div class="field">
          <input type="text" name="phone" onChange = {(e)=>setPhone(e.target.value)} required />
          <span></span>
          <label>Phone number</label>
        </div>
        <div class="field">
          <input type="text" name="email" onChange = {(e)=>setEmail(e.target.value)} required />
          <span></span>
          <label>Email</label>
        </div>
        <div class="field">
          <input type="text" name="Address" onChange = {(e)=>setAdress(e.target.value)} required />
          <span></span>
          <label>Address</label>
        </div>
        <div class="field">
          <input type="text" name="City" onChange = {(e)=>setCity(e.target.value)} required />
          <span></span>
          <label>City</label>
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Add_user;
