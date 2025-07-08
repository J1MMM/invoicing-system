import { Box, Container, Paper, Typography } from "@mui/material";

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
        <Typography variant="h4" fontWeight="bold">
          Sign in
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur.
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginPage;
