import React from "react";
import { Link } from "react-router-dom";
import "./Add_admin.css";
import { useEffect, useState } from "react";

import axios from "axios";

function Add_admin(props) {
  const [username, setUsername] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const addAdmin = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) return alert("Password isn't confirmed");

    const body = {
      username,
      password,
      phone,
      email,
    };

    const res = await axios.post(`http://localhost:4000/manager`, body);
    console.log(
      "🚀 ~ file: Dashboard.jsx ~ line 14 ~ getCustomer ~ res",
      res.data
    );

    if (!res.data || res.data.error) return alert("KO CÓ KET QUA PHU HOP");

    window.location.href="/dashboard"
    // const { customers } = res.data;
    // setCustomerList(customers);
  };

  return (
    <div className="center_add_admin">
      <h1>Add admin</h1>
      <form method="post" onSubmit={addAdmin}>
        <div className="field">
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <span></span>
          <label>Username</label>
        </div>
        <div className="field">
          <input
            type="text"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <span></span>
          <label>Phone number</label>
        </div>
        <div className="field">
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span></span>
          <label>Email</label>
        </div>
        <div className="field">
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span></span>
          <label>New Password</label>
        </div>
        <div className="field">
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
          <input type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
}

export default Add_admin;
