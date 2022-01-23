import React from "react";
import "./Navbar.css";
import { Icon } from "@iconify/react";

function HeaderNavbar() {
  return (
    <div className="ContNav">
      <div className="Logo">
        Parko<span>mate</span>
      </div>
      <div className="RightCont">
        {" "}
        <label className="search__label">
         <Icon icon="ant-design:search-outlined"  className="search__icon" />
          
          <input
            className="search__input"
            placeholder="Search"
            type="text"
            id="search"
            name="search"
          />
        </label>

        <div className="userCont"><Icon icon="carbon:user-avatar-filled-alt" /></div>
      <div className="logoutCont"><Icon icon="ant-design:logout-outlined" color="#b71405" height="20" rotate={3} /> Logout</div>
      </div>
    </div>
  );
}
export default HeaderNavbar;
