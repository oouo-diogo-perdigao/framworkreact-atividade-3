import React from "react";
import { Route } from "react-router-dom";
import { Home, Movie } from "../routers";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/film/:id" component={Movie} />
  </>
);
