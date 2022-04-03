import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const history = useHistory();

  useEffect(() => {
    console.log("123");
    // getData()
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:4000");
    console.log(res.data);
  };

  useEffect(() => {
    console.log(username);
    console.log(password);
  }, [username, password]);

  const loginHandler = async (e) => {
    e.preventDefault();
    // alert(username)
    // alert()
    if (!username || username.length < 5) return alert("username khong hop le");
    if (!password || password.length < 5) return alert("password khong hop le");

    const body = {
      username,
      password,
    };

    try {
      const res = await axios.post("http://localhost:4000/system/login", body);
      console.log("login successfully", res.data);

      if (!res.data || !res.data.account) return;
      const { account } = res.data;
      console.log(
        "🚀 ~ file: Login.jsx ~ line 42 ~ loginHandler ~ account",
        account
      );

      saveLocalStorage(account);
    } catch (error) {
      console.log(error);
    }
  };

  const saveLocalStorage = (account) => {
    localStorage.setItem("account", JSON.stringify(account));

    history.push("/dashboard");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    if (!username || username.length < 5) return alert("username khong hop le");
    if (!password || password.length < 5) return alert("password khong hop le");

    const body = {
        username: data.get("email"),
        password: data.get("password"),
    //   username,
    //   password,
    };

    console.log(body);

    try {
      const res = await axios.post("http://localhost:4000/system/login", body);
      console.log("login successfully", res.data);

      if (!res.data || !res.data.account) return;
      const { account } = res.data;
      console.log(
        "🚀 ~ file: Login.jsx ~ line 42 ~ loginHandler ~ account",
        account
      );

      saveLocalStorage(account);
    } catch (error) {
      console.log(error);
    }
  };

  return (
   
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            > 
            {/* <form method="post" onSubmit={loginHandler}> */}
              <TextField onChange={(e) => setUsername(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              {/* </form> */}
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    {/* Forgot password? */}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {/* {"Don't have an account? Sign Up"} */}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
      </ThemeProvider>
    
  );
}
