import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

function Dashboard(props) {
  const history = useHistory();

  const [customerList, setCustomerList] = useState([]);
  const [keyword, setKeyword] = useState(null);
  const [show, setShow] = useState("none");

  useEffect(() => {
    getCustomer();

    localStorage.getItem("account");
    console.log(`123`, show, JSON.parse(localStorage.getItem("account")).role);
    setShow(
      localStorage.getItem("account") &&
        JSON.parse(localStorage.getItem("account")).role === "manager"
        ? "block"
        : "none"
    );
  }, []);

  const getCustomer = async () => {
    const res = await axios.get("http://localhost:4000/customer");
    console.log(
      "🚀 ~ file: Dashboard.jsx ~ line 14 ~ getCustomer ~ res",
      res.data
    );

    if (!res.data) return alert("KO CÓ DỮ LIỆU TRẢ VỀ");

    const { customers } = res.data;
    setCustomerList(customers);
  };

  const editCustomer = async (item) => {
    console.log(`item`, item);

    const res = await axios.put(`http://localhost:4000/customer/${item.id}`);
    if (!res) return alert("NO RESPONSE!");
    console.log(`res`, res.data);

    // if (res.data.status !== 1) alert("VL");
    // const index = customerList.findIndex((x) => x.id === item.id);
    // // const a = customerList.splice(index, 1);
    // const finalCustomers = customerList.filter((x) => x.id !== item.id);

    // setCustomerList(finalCustomers);

    // console.log(`finalCustomers: `, finalCustomers);

    // console.log(`del result: `, a);
  };

  const showEdit = (item) => {
    console.log(item);
    localStorage.setItem("edit", JSON.stringify(item));

    window.location.href = "/edit-user";
  };

  const deleteCustomer = async (item) => {
    console.log(`item`, item);

    const res = await axios.delete(`http://localhost:4000/customer/${item.id}`);
    if (!res) return alert("NO RESPONSE!");
    console.log(`res`, res.data);

    if (res.data.status !== 1) alert("VL");
    const index = customerList.findIndex((x) => x.id === item.id);
    // const a = customerList.splice(index, 1);
    const finalCustomers = customerList.filter((x) => x.id !== item.id);

    setCustomerList(finalCustomers);

    console.log(`finalCustomers: `, finalCustomers);

    // console.log(`del result: `, a);
  };

  const search = async (e) => {
    e.preventDefault();

    const res = await axios.get(
      `http://localhost:4000/customer?name=${keyword}`
    );
    console.log(
      "🚀 ~ file: Dashboard.jsx ~ line 14 ~ getCustomer ~ res",
      res.data
    );

    if (!res.data || res.data.error) return alert("KO CÓ KET QUA PHU HOP");

    const { customers } = res.data;
    setCustomerList(customers);
  };

  const logout = () => {
    localStorage.removeItem("account");

    history.push("/");
  };

  return (
    <div>
      <div className="dashboard_header">
        <form onSubmit={search}>
          <input
            className="dashboard_header_search"
            type="text"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="b_search">Search</button>
        </form>
        <div className="dashboard_header_group">
          <div style={{ display: show }}>
            <Link to="add-admin">
              <button className="dashboard_add">Add admin</button>
            </Link>
          </div>
          <div>
            <Link to="home">
              <button onClick={logout} className="dashboard_signout">
                Log out
              </button>
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
              Country
            </div>
            <div className="datalist_menu" id="inf_function">
              Function
            </div>
          </div>
          {customerList.length > 0 &&
            customerList.map((item, key) => {
              return (
                <div className="container_inf" key={key}>
                  <div className="datalist_inf" id="inf_id">
                    {item.id}
                  </div>
                  <div className="datalist_inf" id="inf_name">
                    {item.username.replace("@gmail.com", "")}
                  </div>
                  <div className="datalist_inf" id="inf_phone">
                    {item.contact_id.phone}
                  </div>
                  <div className="datalist_inf" id="inf_email">
                    {item.contact_id.email}
                  </div>
                  <div className="datalist_inf" id="inf_address">
                    {`${item.address_id.street}, ${item.address_id.ward} Ward, ${item.address_id.district} District, ${item.address_id.city} City`}
                  </div>
                  <div className="datalist_inf" id="inf_city">
                    {item.address_id.country}
                  </div>
                  <div className="datalist_inf" id="inf_function">
                    <div className="frame_func">
                      <img
                        onClick={() => showEdit(item)}
                        className="setting_icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ic_settings_48px.svg/2048px-Ic_settings_48px.svg.png"
                      />

                      <img
                        onClick={() => deleteCustomer(item)}
                        className="delete_icon"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAADHx8ckJCT4+Pg2NjapqalgYGCampqSkpIoKCh+fn7e3t7q6upVVVW8vLw/Pz+wsLDPz8+enp5sbGzW1tZCQkIfHx+2trZ2dnaEhITw8PDOzs7BwcFRUVFLS0szMzPj4+MXFxdxcXGLi4sPDw9nZ2cZGRkPUvFYAAAECklEQVR4nO2df1uyMBSGQxF/oAYihpJhFvX9v+Fr6eYm8IIydsZ67r+6TiDnDtxgjbOnJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANiGWwF1XmpYRNnhpYJDsFtR59cW98OpYRRT59iKxUud4ImEOss2HBoIOk6Pr9RJI0FnQ53nw7hNrtEf9tSZPsqqoaCzpc70UaZNDXPqTB/FvzrMvnzf33lnotPPfiAqUmf6KGsmMCxrLd2tRYYVnfqYG/b1/o0Zjit+P7fGcFrx+/TbFkOvaoPAFsOqc9h/Q/Zc8Vm1waYXbWkae5NyIibwFlVsMWOG05K9w3AVpyn52X3lPUJH5Nk0JfRzvzr2O0sO6ASbPf61Z05luK3PTQ1LIsGFLkHHWdAY7vUZhjSGkT7DCY3hznpDoSvc7QfK8XxyQ/54N+uoIXgfEhtm7PjvXR1hRWzIngy+ujtEZobhrrtDjM0wDLo7xMYMw+on3LaEhnwPHWfbTVtzvaUgNzx1GIHAaDlWQHAk7w/fCrcenWH/XVtEYxjrM6T6H6q2y3REJKjvJNIN1Hh6BCvHzDUQaxiLGhFPZIg/+cC1M3ucUSDBP3KdEA3RSLDbY4XtAR8MV/eRbVgrN3SHZhlG1ht6MLwbGOoGhvcDQ93A8H5gqBsY3g8MdfNnDSdBVhjud731tDB1JI3WOznYD8PfSW25/IR+fsHkQ979POFBGvPtheFlokYmbXkZfpRmVqSXvV+FWC8M2eiN+D8bNgEnKNvbF2J9MGRnRpqwxSbgHMW92RiI+OJMHwyfywx5UPx2snGsoRCzy3DZU8PEesMQhhwYmsDfbGlgeAWGJgDDYhCGMNQNDItBGMJQNzAsBmEIQ93AsBiEIQx1A8NiEIYw1A0Mi0EYwlA3MCwGrTVMYMiAoW5gyLHfMIQhA4a6gSHHfsPIJsO99YbzxoasuORBiPXB0P3f91CaI8zqh4jllE0zTEoM+dRfsfgoqzIhFXpk17NYvsQ0w0GZ4es5Jr9xcZneLpf3vrx7LxabNc2QVVWbSdHBT5Y3ZcDS32blppzOPD/Fcsnazc0yjMvTceN9sT7uajIpvDPjhpNELhfMZ/rPbrelYaH8D85b4qx+Wy2wKhbKysjwqjAf9dtqgdUaUrYQBy+XQlQfqgBfqUNRpZXr2iZkJZJv4BltlNQX5+2MMySvV87gKb0pOItC3aIOa07eyXXVo3zassDgXCyhbcpFKtyF/vC93PoPss5y8ZNMWkIocbqA2kqii/Lshi1WtqzP+E6IqpRXo3qZBANXKlNagO/FyFUR5+P6zBvyaUxXf0OspME5tu1Tu2W1D6dtSJ7N6eYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACvwD+AdPMLe3G4oAAAAASUVORK5CYII="
                      />
                    </div>
                    {/* <div>2</div> */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="dashboard_footer">
        <div className="dashboard_footer_b_adduser">
          <Link to="add-user">
            <button>Add customer</button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Dashboard;
