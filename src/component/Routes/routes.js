import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./style.css";
import { Icon } from "@iconify/react";
import HomePage from "../HomePage"
import Threedjs from "../Threedjs"
function Sidebar() {
  // const [modal, setModal] = useState(false);

  return (
    <div className="side__big">
      <div className="App__sidebar">
        <NavLink
          to="/"
          // className={({ isActive }) => (isActive ? " activ__sidebar" : "")}
        >
          <Icon
            icon="ep:menu"
            color="#515358"
            height="25"
            rotate={3}
          />
        </NavLink>

        <NavLink to="/nima">
          <Icon icon="gg:loadbar-doc" color="#515358" height="25"  />
        </NavLink>
        <NavLink to="/doc">
          <Icon
            icon="ant-design:logout-outlined"
            color="#515358"
            height="25"
            rotate={3}
          />
        </NavLink>
        <NavLink to="/fleg">
          <Icon
            icon="ant-design:logout-outlined"
            color="#515358"
            height="25"
            rotate={3}
          />
        </NavLink>
        <NavLink to="/add">
          <Icon
            icon="carbon:add-filled"
            color="#515358"
            height="25"
           
          />
        </NavLink>
        <NavLink to="/money">
          <Icon
            icon="ant-design:dollar-circle-filled"
            color="#515358"
            height="25"
         
          />
        </NavLink>
      </div>
      <div className="side__bloc">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nima" className={"kkk"} element={<Threedjs />} />
          <Route path="cards" element={"cards"} />
          <Route path="cards/add" element={"cards/add"} />
          <Route path="/money" element={"/money"} />
          <Route path="//id" element={"salo0000000000m"} />
        </Routes>
      </div>

     

    </div>
  );
}

export default Sidebar;
