import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

import { AccountMenu } from "../AccountMenu/AccountMenu";
import { FaSearch } from "react-icons/fa";
import Footer from "../Footer/Footer";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import GlobalStyles from '@mui/material/GlobalStyles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
// import Barchart from "../chart/chart";
function Dashboard(props) {
  const history = useHistory();

  const [customerList, setCustomerList] = useState([]);
  const [keyword, setKeyword] = useState(null);
  
  const account = localStorage.getItem("account");

  useEffect(() => {
    getCustomer();

    
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

  return (
    <div className="container_dashboard_header">
      {/* <div className="logo">
        <h1>KMC Tech</h1> */}
        {/* <img src="https://ced.ias.com.vn/wp-content/uploads/2020/06/banner-hanh-chinh-nhan-su-ced.png" alt="" /> */}
        {/* <img src="http://velikorodnov.com/html/autotrader/images/logo.png" alt="Logo" style="width: 120px;"></img> */}
        {/* <h2>Your vision, our future</h2> */}
      {/* </div> */}
      <div className="appbar">
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            <Link to="/dashboard"><h1>KMC Tech</h1></Link>
          </Typography>
          <nav style={{marginRight:"25px"}}>
            <Link
              style={{margin:"30px",textDecoration:"none"}}
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              About
            </Link>
            <Link 
            style={{margin:"30px",textDecoration:"none"}}
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Features
            </Link>
            <Link
            style={{margin:"30px",textDecoration:"none"}}
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Pricing
            </Link>

            <Link
            style={{margin:"30px", textDecoration:"none"}}
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              ContactUs
            </Link>
            
          </nav>
          
        </Toolbar>
      </AppBar>
      </div>

      <div className="dashboard_header">
        <div className="banner_img">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />
        </div>
        <form className="dashboard_header-formSearch" onSubmit={search}>
          <span className="dashboard_header_iconSearch">
            <FaSearch />
          </span>
          <input
            className="dashboard_header_search"
            type="text"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search..."
          />

          {/* <button className="b_search">Search</button> */}
        </form>
        <div className="dashboard_header_group">
          
          <div>
            <AccountMenu />
          </div>
          <div></div>
        </div>
      </div>
      <div className="dashboard_body">
        {/* <Title>Recent Orders</Title> */}
        <Table className="table" size="small">
          <TableHead>
            <TableRow className="dashboard_table">
              <TableCell className="dashboard_head_child">ID</TableCell>
              <TableCell className="dashboard_head_child">Name</TableCell>
              <TableCell className="dashboard_head_child">Phone</TableCell>
              <TableCell className="dashboard_head_child">Email</TableCell>
              <TableCell className="dashboard_head_child">Address</TableCell>
              <TableCell className="dashboard_head_child">Country</TableCell>
              <TableCell className="dashboard_head_child">Function</TableCell>
              {/* <TableCell align="right">Sale Amount</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {customerList.length > 0 &&
              customerList.map((item, key) => (
                // <div></div>
                <TableRow className="dashboard_table_col" key={key} >
                  <TableCell className="dashboard_table_child"> 
                    {item.id}
                  </TableCell>
                  <TableCell className="dashboard_table_child">
                    {item.username.replace("@gmail.com", "")}
                  </TableCell>
                  <TableCell className="dashboard_table_child">
                    {item.contact_id.phone}
                  </TableCell>
                  <TableCell className="dashboard_table_child">
                    {item.contact_id.email}
                  </TableCell>
                  <TableCell className="dashboard_table_child">{`${item.address_id.street}, ${item.address_id.ward} Ward, ${item.address_id.district} District, ${item.address_id.city} City`}</TableCell>
                  <TableCell className="dashboard_table_child">
                    {item.address_id.country}
                  </TableCell>
                  <TableCell className="dashboard_table_child">
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
                  </TableCell>
                  {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
        
      </div>
      {/* <div><Barchart/></div> */}

      <div className="dashboard_footer">
        <div className="dashboard_footer_b_adduser">
          {/* <Link to="add-user">
            <button>Add customer</button>
          </Link> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
