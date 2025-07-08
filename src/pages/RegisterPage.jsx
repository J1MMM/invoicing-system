import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function RegisterPage() {
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
      <Paper elevation={3} sx={{ padding: 5 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          color="primary"
        >
          Create an Account
        </Typography>
        <Typography variant="body1" textAlign="center">
          Register to start managing your invoices
        </Typography>

        <Stack width={300} mt={2}>
          <TextField
            label="Full Name"
            name="fullname"
            placeholder="your name"
            autoComplete="off"
            size="small"
            margin="normal"
            fullWidth
            required
          />
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

          <Button
            variant="contained"
            sx={{ textTransform: "none", padding: 1, mt: 2 }}
          >
            Register
          </Button>

          <Typography fontSize={12} mt={3}>
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
