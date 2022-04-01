import React from "react";
import { Link } from "react-router-dom";
import "./Edit_user.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Edit_user(props) {
  //   const item = props.location.state;
  const item = JSON.parse(
    localStorage.getItem("edit") ? localStorage.getItem("edit") : []
  );

  useEffect(() => {
    console.log(`item`, item);
  }, []);

  const [id, setId] = useState(item ? item.id : null);
  const [username, setUsername] = useState(item ? item.username : null);
  const [password, setPassword] = useState(item ? item.passsword : null);
  const [phone, setPhone] = useState(item ? item.contact_id.phone : null);
  const [email, setEmail] = useState(item ? item.contact_id.email : null);

  const [street, setStreet] = useState(item ? item.address_id.street : null);
  const [district, setDistrict] = useState(
    item ? item.address_id.district : null
  );
  const [ward, setWard] = useState(item ? item.address_id.ward : null);
  const [city, setCity] = useState(item ? item.address_id.city : null);
  const [country, setCountry] = useState(item ? item.address_id.country : null);

  const EditUser = async (e) => {
    e.preventDefault();

    const body = {
      username,
      // password,
      phone,
      email,
      street,
      district,
      ward,
      city,
      country,
    };

    if (
      !username ||
      // !password ||
      !phone ||
      !email ||
      !street ||
      !ward ||
      !district ||
      !city ||
      !country
    )
      return alert("Dữ liệu ko hợp lệ");

    const res = await axios.patch(`http://localhost:4000/customer/${id}`, body);
    console.log(
      "🚀 ~ file: Dashboard.jsx ~ line 14 ~ getCustomer ~ res",
      res.data
    );

    if (!res.data) return alert("KO CÓ DỮ LIỆU TRẢ VỀ");

    alert("EDIT SUCCESS");

    localStorage.removeItem(`edit`);
    window.location.href = "/dashboard";
  };

  const backToDashboard = () => {
    window.location.href = "/dashboard";
  };

  return (
    <div className="center">
      <h1>Edit User</h1>
      <form method="post" onSubmit={EditUser}>
        <div className="field">
          <input type="text" name="id" disabled placeholder={`id: ${id}`} />
          <span></span>
        </div>
        <div className="field">
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            required
            value={username}
          />
          <span></span>
          {/* <label>Username</label> */}
        </div>
        {/* <div className="field">
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
    value={username}
            />
          <span></span>
        </div> */}
        <div className="field">
          <input
            type="text"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            required
            value={phone}
          />
          <span></span>
          {/* <label>Phone number</label> */}
        </div>
        <div className="field">
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            value={email}
          />
          <span></span>
          {/* <label>Email</label> */}
        </div>
        <div className="field">
          <input
            type="text"
            name="Street"
            onChange={(e) => setStreet(e.target.value)}
            required
            value={street}
          />
          <span></span>
          {/* <label>Street</label> */}
        </div>

        <div className="field">
          <input
            type="text"
            name="Ward"
            onChange={(e) => setWard(e.target.value)}
            required
            value={ward}
          />
          <span></span>
          {/* <label>Ward</label> */}
        </div>

        <div className="field">
          <input
            type="text"
            name="District"
            onChange={(e) => setDistrict(e.target.value)}
            required
            value={district}
          />
          <span></span>
          {/* <label>District</label> */}
        </div>

        <div className="field">
          <input
            type="text"
            name="City"
            onChange={(e) => setCity(e.target.value)}
            required
            value={city}
          />
          <span></span>
          {/* <label>City</label> */}
        </div>

        <div className="field">
          <input
            type="text"
            name="country"
            onChange={(e) => setCountry(e.target.value)}
            required
            value={country}
          />
          <span></span>
          {/* <label>Country</label> */}
        </div>

        <div>
          <input type="button" value="Cancel" onClick={backToDashboard} />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Edit_user;
