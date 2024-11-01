import React from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";

import "./NavBar.css";
import logo from "../../images/logo.png";
import user from "../../images/user.jpg";

export default function NavBar(prop) {
  const { wishList } = prop;
  // badgeContent = number of item in wishList
  // [] => nameArray.length
  const arrayLength = wishList.length;
  console.log(arrayLength, "length");

  return (
    <nav className="nav">
      <img src={logo} alt="logo" />

      <ul className="navList">
        {/* <Link to="/">Home</Link> */}
        <Link to="/">
          <HomeIcon sx={{ color: "black" }} />
        </Link>
        <Link to="/products">
          <CheckroomIcon sx={{ color: "black" }} />
        </Link>
        <Badge badgeContent={arrayLength} color="primary">
          <Link to="/wishList">
            <FavoriteIcon />
          </Link>
        </Badge>
        <Link to="/cart">
          <ShoppingCartIcon />
        </Link>
        {/* <Link to="/login">
          <PersonIcon />
        </Link> */}

        <Link to="/register">
          <Avatar alt="user icon" src={user} />
        </Link>
      </ul>
    </nav>
  );
}

let smt = 2;
export { smt };
