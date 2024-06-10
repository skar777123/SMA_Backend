import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import {
  Home,
  Add,
  Search,
  AccountCircle,
} from "@mui/icons-material";

export default function  Header () {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('token')){
      navigate('/login')
    }
  })
  return (
    <div className="header">
      <Link to="/homePost">
        <Home />
      </Link>
      <Link to="/AddPost">
        <Add />
      </Link>
      <Link to="/search">
        <Search />
      </Link>
      <Link to="/profile">
        <AccountCircle />
      </Link>
    </div>
  );
}
