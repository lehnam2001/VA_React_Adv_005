import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from './home';
import { MyProfile } from './myProfile';
import { Profile} from './profile';
import { OthersProfile } from './ortherProfile';
import Search from './search';

export default function Index() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="home/*" element={<Home />} />
        <Route path="search/*" element={<Search />} />
        <Route path="profile" element={<Profile />}>
          <Route path="me" element={<MyProfile />} />
          <Route path=":id" element={<OthersProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}