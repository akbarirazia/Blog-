import React from "react";
import { AppBar } from "@mui/material";
const Header = () => {
  return (
    <AppBar sx={{ background: "red" }}>
      <toolbar>
        <Typography variant="h4">Blogs Application</Typography>
        <box display="flex" marginLeft="auto">
          <button color="warning">Login</button>
          <button color="warning">Signup</button>
        </box>
      </toolbar>
    </AppBar>
  );
};
export default Header;
