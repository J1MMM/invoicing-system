import {
  Alert,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUsers, saveUser, setToken } from "../utils/storage";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function RegisterPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [alertMsg, setAlertMsg] = useState("");
  const [alertSev, setAlertSev] = useState("success");
  const [showPwd, setShowPwd] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const users = getUsers();
    const duplicate = users.find((u) => u.username == form.username);
    if (duplicate) {
      setAlertSev("error");
      setAlertMsg("Username already exists.");
      return;
    }

    users.push(form);
    saveUser(users);
    setAlertSev("success");
    setAlertMsg("Success! Proceed to login.");
  };

  useEffect(() => {
    setAlertMsg("");
  }, [form]);

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
        sx={{ padding: 5 }}
        component="form"
        onSubmit={handleRegister}
      >
        <Box mb={1}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            color="primary"
          >
            Create an Account
          </Typography>
          <Typography variant="body1" textAlign="center">
            Register to start managing your invoices
          </Typography>
        </Box>

        {!!alertMsg && <Alert severity={alertSev}>{alertMsg}</Alert>}

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
            type={showPwd ? "text" : "password"}
            value={form.password}
            onChange={handleFormChange}
            autoComplete="off"
            size="small"
            margin="normal"
            fullWidth
            required
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPwd((p) => !p)}
                      edge="end"
                    >
                      {showPwd ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "none", padding: 1, mt: 2 }}
          >
            Register
          </Button>

          <Typography fontSize={14} mt={3}>
            Already have an account?{" "}
            <Link
              style={{ textDecoration: "none", color: "#1976D2" }}
              to="/login"
            >
              Log in here
            </Link>
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
}

export default RegisterPage;
