import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import React, {useState, useEffect } from "react";
import { Settings, PersonAdd, Logout } from "@mui/icons-material";
import { Link, useHistory } from "react-router-dom";
import "./AccountMenu.css";

export const AccountMenu = ({ setIsLogin }) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [show, setShow] = useState("none");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    localStorage.removeItem("account");

    history.push("/");
  };
  const handleLogout = () => {
    setIsLogin(false)
    logout()
  }
  useEffect(()=>{
    localStorage.getItem("account");
    console.log(`123`, show, JSON.parse(localStorage.getItem("account")).role);
    setShow(
      localStorage.getItem("account") &&
        JSON.parse(localStorage.getItem("account")).role === "manager"
        ? "block"
        : "none"
    );
  },[])

  return (
    <div>
      {/* <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}> */}
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 35 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 32, height: 32, background:"orange" }}>M</Avatar>
        </IconButton>
      </Tooltip>
      {/* </Box> */}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem style={{display: show, marginRight:"30px"}} onClick={() => history("/add-admin")}>

          <Link style={{textDecoration : "none"}} className="menu_item" to="add-admin">
            <Avatar /> Add Admin
          </Link>
        </MenuItem>
        <MenuItem>
          <Link style={{textDecoration : "none"}} className="menu_item" to="add-user">
            <Avatar /> Add Customer
          </Link>
        </MenuItem>
        <Divider />

        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};
