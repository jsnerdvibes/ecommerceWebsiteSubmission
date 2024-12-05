import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

import React from 'react'


//need header in every page so using react router dom to change only elements based on current route
function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default Layout