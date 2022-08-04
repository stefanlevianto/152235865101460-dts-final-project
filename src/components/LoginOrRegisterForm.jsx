import React, { useState, useEffect } from "react";
import { Card, Box, Button, TextField, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  auth,
  loginDenganEmailDanPassword,
  registerDenganEmailDanPassword,
} from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const [user, isLoading] = useAuthState(auth);
  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    loginDenganEmailDanPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    registerDenganEmailDanPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };
  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [user, isLoading, navigate]);

  return (
    <Card sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 1 / 2,
          length: 1 / 2,
        }}
      >
        <Typography variant="h5">
          {loginOrRegister === "login" ? "Login Page" : "Register Page"}
        </Typography>

        <TextField
          sx={{ width: 2.5 / 3 }}
          label="EMAIL"
          type="email"
          variant="outlined"
          size="big"
          margin="dense"
          value={credential.email}
          onChange={textFieldEmailOnChangeHandler}
        />

        <TextField
          sx={{ width: 2.5 / 3 }}
          label="PASSWORD"
          type="Password"
          variant="outlined"
          size="big"
          margin="dense"
          value={credential.password}
          onChange={textFieldPasswordOnChangeHandler}
        />

        <Button
          sx={{ width: 2.5 / 3, height: 1 / 3, m: 1, fontSize: 20 }}
          variant="contained"
          size="big"
          onClick={buttonLoginOrRegisterOnClickHandler}
        >
          {loginOrRegister === "login" ? "Login" : "Register Account"}
        </Button>
        {loginOrRegister === "login" ? (
          <Link onClick={() => navigate("/register")}>
            <Typography variant="body1">or do you want Register ?</Typography>
          </Link>
        ) : (
          <Link onClick={() => navigate("/login")}>
            <Typography variant="body1">or do you want Login ?</Typography>
          </Link>
        )}
      </Box>
    </Card>
  );
};

export default LoginOrRegisterForm;
