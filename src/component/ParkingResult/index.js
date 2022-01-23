import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Icon } from "@iconify/react";
import "./ParkingResult.css";
import leftCar from "../../assets/img/leftPhoto.png";
import car from "../../assets/img/car.png";
// import Car from "./car";
const cardCar = <img src={car} />;
const disabled = <Icon icon="cil:disabled" rotate={5} />;
const array = [
  {
    children: [
      {
        children: [
          {
            cardNumber: 105,
            cardNumberR: 121,
            cardCarR: cardCar,
          },
          {
            cardNumber: 102,
            cardNumberR: 122,
            cardCar: ".",
          },
          {
            cardNumber: 103,
            cardNumberR: 123,
            cardCar: cardCar,
          },
          {
            cardNumber: 104,
            cardNumberR: 124,
            cardCarR: cardCar,
          },
          {
            cardNumber: 105,
            cardNumberR: 125,
          },
          {
            cardNumber: 106,
            cardNumberR: 126,
          },
          {
            cardNumber: 107,
            cardNumberR: 127,
            cardCar: cardCar,
          },
        ],
        date: "31 Июль",
      },
      {
        children: [
          {
            cardNumber: 101,
            cardNumberR: 121,
            cardCarR: cardCar,
            cardName:"240 vvv"
          },
          {
            cardNumber: 102,
            cardNumberR: 122,
            cardCar: ".",
            cardName:"303 vvv"
          },
          {
            cardNumber: 103,
            cardNumberR: 123,
            cardCar: cardCar,
          },
          {
            cardNumber: 104,
            cardNumberR: 124,
            cardCarR: cardCar,
          },
          {
            cardNumber: 105,
            cardNumberR: 125,
          },
          {
            cardNumber: 106,
            cardNumberR: 126,
          },
          {
            cardNumber: 107,
            cardNumberR: 127,
            cardCar: cardCar,
          },
        ],
        date: "31 Июль",
      },
      {
        children: [
          {
            cardNumber: 101,
            cardNumberR: 121,
            cardCarR: cardCar,
          },
          {
            cardNumber: 102,
            cardNumberR: 122,
            cardCar: disabled,
          },
          {
            cardNumber: 103,
            cardNumberR: 123,
            cardCar: disabled,
            cardCarR: cardCar,
          },
          {
            cardNumber: 104,
            cardNumberR: 124,
            cardCar: cardCar,
          },
          {
            cardNumber: 105,
            cardNumberR: 125,
            cardCarR: cardCar,
          },
          {
            cardNumber: 106,
            cardNumberR: 126,
            cardCarR: cardCar,
          },
          {
            cardNumber: 107,
            cardNumberR: 127,
          },
        ],
        date: "31 Июль",
      },
    ],
    ddd: "salom",
  },
];
function ParkingResult() {
  const [open, setOpen] = React.useState(false);
  const [dataModal, setDataModal] = React.useState([]);
  function OpenModalInfo(data) {
    setOpen(!open);
    setDataModal(data);
  }
  console.log(setDataModal)
  return (
    <div className="ParkingResult">
      <div className="resultTitle">
        <h1>Phoenix Marketcity </h1>
      </div>
      <div className="tabContent">
        <Tabs>
          <TabList>
            <Tab>
              <p className="TabHistory"> Lavel 1</p>
            </Tab>
            <Tab>
              <p className="TabHistory"> Lavel 2</p>
            </Tab>
            <Tab>
              <p className="TabHistory"> Lavel 3</p>
            </Tab>
            <Tab>
              <p className="TabHistory"> Lavel 4</p>
            </Tab>
          </TabList>
          <div style={{position: 'absolute'}}>
          <TabPanel>
          {/* <Car/> */}

            {array?.map((item, index) => {
              return (
                <div key={index} className="big_mod">
                  {item.children?.map((item, index) => {
                    return (
                      <>
                        <div className="sidewaBug" key={index}>
                          {item.children?.map((item, index) => {
                            return (
                              <div className="sidewalkCont" key={index}>
                                <>
                                  <div className="sidewalLeft">
                                    <div
                                      className="carCont"
                                      onClick={() => {
                                        OpenModalInfo(item);
                                      }}
                                    >
                                      {item.cardCar}
                                    </div>
                                    {item.cardNumber}
                                  </div>
                                  <div className="sidewalRight">
                                    <div
                                      className="carCont"
                                      onClick={() => {
                                        setOpen(!open);
                                      }}
                                    >
                                      {item.cardCarR}
                                    </div>
                                    {item.cardNumberR}
                                  </div>
                                </>

                                {/* );
})} */}
                              </div>
                            );
                          })}
                        </div>
                        <div className="HrCont">
                          <div className="entryCont">
                            <h1>ENTRY</h1>
                            <Icon icon="bi:arrow-down" />
                          </div>
                          <hr className="Hr" />
                          <div>
                            <Icon icon="bi:arrow-down" />
                          </div>
                        </div>
                      </>
                    );
                  })}
                  <div className={open === true ? "d_flex" : "d_none"}>
                    <div className="ModalRes">
                      <div className="modalTitle">
                        
                        <h2>Parking Space #2238</h2>
                        <Icon
                          icon="bi:x"
                          rotate={1}
                          onClick={() => {
                            setOpen(!open);
                          }}
                        />
                      </div>

                      <div className="ModalImg">
                        <img src={leftCar} />
                      </div>
                      <div className="modalCardName"><h1>Renault Mege Rs</h1>
                      <span>{dataModal.cardNumber}</span></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </TabPanel>
          </div>
          <TabPanel>122222222222</TabPanel>
          <TabPanel>3333333</TabPanel>
          <TabPanel>3334444444444444</TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
export default ParkingResult;
