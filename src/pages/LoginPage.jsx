import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const LoginPage = () => {
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
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          color="primary"
        >
          Welcome Back
        </Typography>
        <Typography variant="body1" textAlign="center">
          Log in to access your Invoice Dashboard
        </Typography>

        <Stack width={300} mt={2}>
          <TextField
            label="Email"
            name="email"
            type="email"
            placeholder="your@email.com"
            autoComplete="off"
            size="small"
            margin="normal"
            fullWidth
            required
          />

          <TextField
            label="Password"
            name="password"
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
