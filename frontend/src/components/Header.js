import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Typography,
  Toolbar,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useStyles } from "./Utils";
import userSelector from "./AddBlogs";
const Header = () => {
  const classes = useStyles();
  const dispath = useDispatch();
  const isLoggedIn = userSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          " linear-gradient(90deg, rgba(245,13,173,0.9859593495601365) 12%, rgba(245,151,96,1) 27%, rgba(240,125,10,1) 48%, rgba(240,138,69,1) 68%, rgba(243,22,181,0.8907212543220413) 80%);",
      }}
    >
      <Toolbar>
        <Typography className={classes.font} variant="h4">
          Afghan Blog
        </Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft="auto" marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <Tab
                className={classes.font}
                label="All Blogs"
                LinkComponent={Link}
                to="/blogs"
              />
              <Tab
                className={classes.font}
                label="My Blogs"
                LinkComponent={Link}
                to="/myBlogs"
              />
              <Tab
                className={classes.font}
                label="Add Blog"
                LinkComponent={Link}
                to="/blogs/add"
              />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              <button
                LinkComponent={Link}
                to="/auth"
                variant=" contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login
              </button>
            </>
          )}
          <Button
            LinkComponent={Link}
            to="/auth"
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            Signup
          </Button>
          {isLoggedIn && (
            <Button
              onClick={() => dispath(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
