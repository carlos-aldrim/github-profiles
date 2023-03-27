import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Followers, Following, Home, PagesRoutes, Profile, Stars } from "views";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={PagesRoutes.home}
          element={<Home/>}
        />
        <Route
          path={PagesRoutes.profile}
          element={<Profile/>}
        />
        <Route
          path={PagesRoutes.followers}
          element={<Followers/>}
        />
        <Route
          path={PagesRoutes.following}
          element={<Following/>}
        />
        <Route
          path={PagesRoutes.stars}
          element={<Stars/>}
        />
      </Routes>
    </BrowserRouter>
  );
};