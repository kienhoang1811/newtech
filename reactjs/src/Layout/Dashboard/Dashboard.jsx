import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard(props) {
  return (
    <div>
      <div className="dashboard_header">
        <div>
          <input className="dashboard_header_search" type="text" />
          <button className="b_search">Tìm Kiếm</button>
        </div>
        <div className="dashboard_header_group">
          <div>
            <Link to="add-admin">
              <button className="dashboard_add">Add admin</button>
            </Link>
          </div>
          <div>
            <Link to="home">
              <button className="dashboard_signout">Sign out</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="dashboard_body">
        <div className="dashboard_body_datalist">
          <div className="container_menu">
            <div className="datalist_menu" id="inf_id">
              ID
            </div>
            <div className="datalist_menu" id="inf_name">
              Name
            </div>
            <div className="datalist_menu" id="inf_phone">
              Phone
            </div>
            <div className="datalist_menu" id="inf_email">
              Email
            </div>
            <div className="datalist_menu" id="inf_address">
              Address
            </div>
            <div className="datalist_menu" id="inf_city">
              City
            </div>
            <div className="datalist_menu" id="inf_function">
              Function
            </div>
          </div>
          <div className="container_inf">
            <div className="datalist_inf" id="inf_id">
              1
            </div>
            <div className="datalist_inf" id="inf_name">
              Hoàng Trọng Kiên
            </div>
            <div className="datalist_inf" id="inf_phone">
              0763 656 338
            </div>
            <div className="datalist_inf" id="inf_email">
              Anhkien1811@gmail.com
            </div>
            <div className="datalist_inf" id="inf_address">
              140/25 Phạm Văn Chiêu, F9, Gò Vấp
            </div>
            <div className="datalist_inf" id="inf_city">
              Hồ Chí Minh
            </div>
            <div className="datalist_inf" id="inf_function">
              Function
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard_footer">
        <div className="dashboard_footer_b_adduser">
          <Link to="add-user"><button>Add user</button></Link>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
