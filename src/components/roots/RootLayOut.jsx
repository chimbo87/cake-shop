import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../header/Navbar";
function RootLayOut() {
  return (
    <div>
      <div>
        <div>
          <Navbar />
          <ScrollRestoration />
          
          
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default RootLayOut;
