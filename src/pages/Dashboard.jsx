import { Button } from "@mui/material";
import React from "react";
import { removeToken } from "../utils/storage";

function Dashboard() {
  return (
    <div>
      Dashboard
      <Button onClick={() => removeToken()}>logout</Button>
    </div>
  );
}

export default Dashboard;
