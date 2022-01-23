import React from "react";
import {NavLink } from "react-router-dom";
import parkImg from "../../assets/img/parkingImg.png";
import parkImg2 from "../../assets/img/parkingImg2.png";
import parkImg3 from "../../assets/img/parkingImg3.png";
import ParkingResult from "../ParkingResult"
import "./HomePage.css";
const array =[ {
  cardImg: parkImg,
  cardTitle: "Phoenix Marketcity ",
  cardDots: "............",
  cardValue: 54,
  cardDate: "08/23",
 
}, {
  cardImg: parkImg2,
  cardTitle: "Skriook C Block Park",
  cardDots: "............",
  cardValue: 16,
  cardDate: "08/23",
 
},{
  cardImg: parkImg3,
  cardTitle: "Zoob Residences",
  cardDots: "............",
  cardValue: 28,
  cardDate: "08/23",
 
},{
  cardImg: parkImg,
  cardTitle: "Phoenix Marketcity ",
  cardDots: "............",
  cardValue: 54,
  cardDate: "08/23",
 
}, {
  cardImg: parkImg2,
  cardTitle: "Skriook C Block Park",
  cardDots: "............",
  cardValue: 16,
  cardDate: "08/23",
 
},{
  cardImg: parkImg3,
  cardTitle: "Zoob Residences",
  cardDots: "............",
  cardValue: 28,
  cardDate: "08/23",
 
},]

function Homepage() {
  return (
    <div className="HomePage">
      <div className="cardsCont">
        <h3>Parking Locations operated by you</h3>
        {array?.map((item, index) => {
          return (
           
            <div className="cardInfo" key={index}>
              <div className="cardImg">
                <img src={item?.cardImg} />
              </div>
              <div className="cardText">
                <h2>{item?.cardTitle}</h2>
                <div className="progressCont">
                  <progress max="100" value={item.cardValue}></progress>
                </div>
                <div className="cardInfoText">
                  <span>450/908</span>
                  <span>{item.cardValue}% Occupied</span>
                </div>
              </div>

              <div className="borderRight"></div>
            </div>
          );
        })}
         {/* {array?.map((item, index) => {
          return (
            <NavLink to="/">
            <div className="cardInfo" key={index}>
              <div className="cardImg">
                <img src={item?.cardImg} />
              </div>
              <div className="cardText">
                <h2>{item?.cardTitle}</h2>
                <div className="progressCont">
                  <progress max="100" value={item.cardValue}></progress>
                </div>
                <div className="cardInfoText">
                  <span>450/908</span>
                  <span>{item.cardValue}% Occupied</span>
                </div>
              </div>

              <div className="borderRight"></div>
            </div>
            </NavLink>
          );
        })} */}
      </div>

     <ParkingResult/>
    </div>
  );
}
export default Homepage;
