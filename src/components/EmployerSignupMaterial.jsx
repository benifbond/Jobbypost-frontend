import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { AvatarGroup } from "@mui/material";
import "./Form.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";
import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      Rob & Ben
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {
  const [user, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticateUser } = useContext(SessionContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newUser = { username: user, email, password };
    const submitUser = await axios.post(
      `${BASE_API_URL}/api/employer/signup`,
      newUser
    );
    console.log(submitUser.data);
    navigate("/employer/profile");
  };

  function handleChange(e) {
    console.log(e.target.value);
    if (e.target.name === "user") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid
        className={"centerForm"}
        sx={{
          width: "50%",
          height: "60%",

          "&:hover": {
            opacity: [0.6, 0.9],
          },
        }}
      >
        <CssBaseline />
        <Grid />
        <Grid item component={Paper} className={"Form"} elevation={24} square>
          <Box
            sx={{
              my: 6,
              mx: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h4">
              Admin Signup
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <TextField
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="user"
                autoComplete="username"
                autoFocus
              />
              <TextField
                onChange={handleChange}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={handleChange}
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
                sx={{ mt: 3, mb: 4 }}
              >
                Submit
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    component={NavLink}
                    to="/employer/login"
                    variant="body2"
                  >
                    {"Have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
              <AvatarGroup>
                <Avatar
                  alt="Robert"
                  src="../images/avatar/20200922_171011.jpg"
                />
                <Avatar alt="Beniah" src="/static/images/avatar/2.jpg" />
              </AvatarGroup>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
