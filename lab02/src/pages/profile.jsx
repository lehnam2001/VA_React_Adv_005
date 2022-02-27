import React from "react";

import { 
  Link, 
  Outlet
} from "react-router-dom";

import MyButton from "../components/button1";
import MyButtonV2 from "../components/button2";
import MyButtonV3 from "../components/button3";

export function Profile(props) {
  return(
    <div>
      <nav>
        <Link to="me">My profile</Link>
      </nav>
      <MyButton />
      <MyButtonV2 />
      <MyButtonV3 />
      <Outlet />
    </div>
  );
}