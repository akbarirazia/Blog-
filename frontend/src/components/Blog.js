import React from "react";
import {
  Avatar,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  IconButton,
  Card,
  Box,
} from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStyles } from "./Utils";

const Blog = ({ title, description, imageURL, userName, isUser, id }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleEdit = (e) => {
    navigate(`/myBlogs/
${id}`);
  };
  const deleteRequest = async () => {
    const res = axios
      .delete(`http://localhost:3000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest()
      .then(navigate("/"))
      .then(() => navigate("/blogs"));
  };

  //console.log(title, isUser);
  return (
    <div>
      <Card
        sx={{
          margin: "auto",
          width: "40%",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover:": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: 'auto'}}>
              <ModeEditOutlineIcon color="warning" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon color="error" />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar
              className={classes.font}
              sx={{ bgColor: "warning" }}
              aria-label="recipe"
            >
              {userName.charAt(0)}
            </Avatar>
          }
          title={title}
        />
        <CardMedia
          component="img"
          height="194"
          image={imageURL}
          alt="Paella dish"
        />

        <CardContent>
          <hr />
          <br />
          <Typography
            className={classes.font}
            variant="body2"
            color="text.secondary"
          >
            <b>
              {userName}
              {": "}
            </b>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default Blog;
