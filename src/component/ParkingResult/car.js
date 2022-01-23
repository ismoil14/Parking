// import React, { useState, useEffect } from "react";
// import styled from 'styled-components';

// export default function Demo() {
//   const [keyInfo, setKeyInfo] = useState("");
//   const [transformState, setTransformState] = useState("")

//   useEffect(()=>{
//     document.addEventListener("keydown", handleKeyPress);
//   },[])
  


//   // document.onkeypress = (e) => {
//   //   setKeyInfo(e.key);

//   //   switch (keyInfo) {
//   //     case "w":
//   //       setTransformState(b);
//   //       break;
//   //     case "s":
//   //       setTransformState(a);
//   //       break;
//   //     default:
//   //     // code block
//   //   }
//   // };

//   const StyledBoard = styled.section`
//   background-color: #F2C438;
//   width: 16rem;
//   height: 16rem;
//   position:relative;
//  `
//  const Square = styled.div`
//    background-color: #593202;
//    width: 1rem;
//    height: 1rem;
//    left: ${({ x }) => x+'rem'};
//    top: ${({ y }) => y+'rem'};
//    position:absolute;
//  `
//  function increment(x){
//    return x + 1;
//  }
//  function decrement(x){
//    return x - 1;  
//  }
//  const actionXMap = {
//     ArrowLeft: decrement,
//     ArrowRight: increment
//  }
//  const actionYMap = {
//     ArrowDown: increment,
//     ArrowUp: decrement
//  }
//  function Board({}) {
//    const [x, setX] = useState(0);
//    const [y, setY] = useState(0);
   
//    function handleKeyPress(e){
//      const actionX = actionXMap[e.key];
//      const actionY = actionYMap[e.key];
//      actionX && setX(actionX);
//      actionY && setY(actionY);
//    }
   
//   }
  

//   // return (
//   //   <div className="demo" onKeyPress={handleKeyPress}>
//   //     <div style={{ width: "200px", height: "200px", background: "red" , transform:`translateY(${transformState}px)` }}></div>
//   //   </div>
//   // );

//   return (
//     <StyledBoard onKeyPress={handleKeyPress}>
//       <Square x={x} y={y}></Square>
//     </StyledBoard>
//   )
// }


import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// const StyledBoard = styled.section`
//  background-color: #F2C438;
//  width: 16rem;
//  height: 16rem;
//  position:relative;
// `
import car from "../../assets/img/car.png";

// const carr = <img src={car} />;
let Square = styled.div`

  left: ${({ x }) => x+'rem'};
  top: ${({ y }) => y+'rem'};
  // transform:translateY( ${({ y }) => y+'px'}) }}
  transform:rotate( ${({ x }) => x+'deg'}) }}
  position:absolute;
    z-index: 10;
`



function increment(x){
  return x + 1;
}
function decrement(x){
  return x - 1;  
}
const actionXMap = {
   ArrowLeft: decrement,
   ArrowRight: increment
}
const actionYMap = {
   ArrowDown: increment,
   ArrowUp: decrement
}
function Car({}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
  function handleKeyPress(e){
    const actionX = actionXMap[e.key];
    const actionY = actionYMap[e.key];
    actionX && setX(actionX);
    actionY && setY(actionY);
    if(e.key=="w"){
     

    }
    let g =0
if (e.key == "a") {
   Square = styled.div`

 
  transform:rotate( ${ x+'deg'}) }}
 
`
}
  }
  
  useEffect(()=>{
    document.addEventListener("keydown", handleKeyPress);
  },[])
  
  return (
    <Square onKeyPress={handleKeyPress} x={x} y={y} style={{ transform:`translateY(${x}px)`}}>
      {/* <Square ></Square> */}
      <img className='autoCar' src={car} />
    </Square>
  )
}

export default Car;