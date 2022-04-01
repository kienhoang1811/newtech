import React from 'react'
import { Link } from 'react-router-dom'
import './Add_user.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Add_user(props) {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [phone, setPhone] = useState(null)
  const [email, setEmail] = useState(null)
  const [street, setStreet] = useState(null)
  const [district, setDistrict] = useState(null)
  const [ward, setWard] = useState(null)
  const [city, setCity] = useState(null)
  const [country, setCountry] = useState(null)
  const addUser = async (e) => {
    e.preventDefault()

    const body = {
      username,
      password,
      phone,
      email,
      street,
      district,
      ward,
      city,
      country,
    }

    if (
      !username ||
      !password ||
      !phone ||
      !email ||
      !street ||
      !ward ||
      !district ||
      !city ||
      !country
    )
      return alert('Dữ liệu ko hợp lệ')

    const res = await axios.post('http://localhost:4000/customer', body)
    console.log(
      '🚀 ~ file: Dashboard.jsx ~ line 14 ~ getCustomer ~ res',
      res.data,
    )

    if (!res.data) return alert('KO CÓ DỮ LIỆU TRẢ VỀ')
  }

  return (
    <div className="center">
      <h1>Add User</h1>
      <form method="post" onSubmit={addUser}>
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
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span></span>
          <label>Password</label>
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
            type="text"
            name="Street"
            onChange={(e) => setStreet(e.target.value)}
            required
          />
          <span></span>
          <label>Street</label>
        </div>

        <div className="field">
          <input
            type="text"
            name="Ward"
            onChange={(e) => setWard(e.target.value)}
            required
          />
          <span></span>
          <label>Ward</label>
        </div>

        <div className="field">
          <input
            type="text"
            name="District"
            onChange={(e) => setDistrict(e.target.value)}
            required
          />
          <span></span>
          <label>District</label>
        </div>

        <div className="field">
          <input
            type="text"
            name="City"
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <span></span>
          <label>City</label>
        </div>

        <div className="field">
          <input
            type="text"
            name="Country"
            onChange={(e) => setCountry(e.target.value)}
            required
          />
          <span></span>
          <label>Country</label>
        </div>

        <div>
          <Link to=""><input type="submit" value="Submit" /></Link>
        </div>
      </form>
    </div>
  )
}

export default Add_user
