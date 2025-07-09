import {
  Alert,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, setToken } from "../utils/storage";

const LoginPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = getUsers();
    console.log(users);
    const user = users.find(
      (u) => u.username == form.username && u.password == form.password
    );
    if (!user) {
    }
    setToken();
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        boxSizing: "border-box",
      }}
    >
      <Paper
        elevation={3}
        sx={{ padding: 3 }}
        component="form"
        onSubmit={handleLogin}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          color="primary"
        >
          Welcome Back
        </Typography>
        <Typography variant="body1" textAlign="center" mb={2}>
          Log in to access your Invoice Dashboard
        </Typography>

        <Alert severity="error">This is an error Alert.</Alert>

        <Stack width={300}>
          <TextField
            label="Username"
            name="username"
            value={form.username}
            onChange={handleFormChange}
            autoComplete="off"
            size="small"
            margin="normal"
            fullWidth
            required
          />

          <TextField
            label="Password"
            name="password"
            value={form.password}
            onChange={handleFormChange}
            type="password"
            autoComplete="off"
            size="small"
            margin="normal"
            fullWidth
            required
          />
          <Typography fontSize={12} color="primary">
            Forgot Password?
          </Typography>

          <Button
            variant="contained"
            sx={{ textTransform: "none", padding: 1, mt: 2 }}
            type="submit"
          >
            Login
          </Button>

          <Typography fontSize={12} mt={3}>
            Don't have an account?{" "}
            <Link
              style={{ textDecoration: "none", color: "#1976D2" }}
              to="/register"
            >
              Register here
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default LoginPage;
