import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../HeaderNavbar"

import RoutesPage from "./routes"
function RoutesRoot(){

return( 
    <>
  <Navbar/>
    <Routes>
      <Route path="/*" element={<RoutesPage />} />
     
    </Routes>
  
    </>
)

}
export default  RoutesRoot;