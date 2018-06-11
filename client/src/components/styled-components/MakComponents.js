import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  background: #00adee;
  color: white;
  border: none;
  margin-bottom: 25px;
  padding: 15px;
  font-weight: 700;
  font-size: 14px;
  border-radius: 5px;
  transition: all 0.4s linear;
  cursor: pointer;
  &:hover {
    background: darken(#00adee, 20%);
  }
`;
// const Button = styled.button`
//   background-color: papayawhip;
//   border-radius: 3px;
//   color: palevioletred;
// `;

// const Button = styled.button`
// width: 300px;
// height: 50px;
// line-height: 50px;
// background-color: #FF6138;
// border-radius: 8px;
// color: #fff;
// font-family: 'Indie Flower', cursive;
// font-size: 22px;
// font-weight: normal;
// text-decoration: none;
// text-align: center;
// display: inline-block;
// position: relative;
// -webkit-transition-duration: 0.3s;
// transition-duration: 0.3s;
// -webkit-transition-property: -webkit-transform;
// transition-property: transform;
// -webkit-transform: translateZ(0);
// -ms-transform: translateZ(0);
// transform: translateZ(0);
// box-shadow: 0 0 1px rgba(0, 0, 0, 0);
// -webkit-transform: translateY(-6px);
// -ms-transform: translateY(-6px);
// transform: translateY(-6px);
// -webkit-animation-name: hover;
// animation-name: hover;
// -webkit-animation-duration: 1.5s;
// animation-duration: 1.5s;
// -webkit-animation-delay: 0.3s;
// animation-delay: 0.3s;
// -webkit-animation-timing-function: linear;
// animation-timing-function: linear;
// -webkit-animation-iteration-count: infinite;
// animation-iteration-count: infinite;
// -webkit-animation-direction: alternate;
// animation-direction: alternate;
// &:before{
// pointer-events: none;
//   position: absolute;
//   z-index: -1;
//   content: '';
//   top: 100%;
//   left: 5%;
//   height: 10px;
//   width: 90%;
//   opacity: 0;
//   background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
//   background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
//   -webkit-transition-duration: 0.3s;
//   transition-duration: 0.3s;
//   -webkit-transition-property: -webkit-transform, opacity;
//   transition-property: transform, opacity;
//   opacity: .4;
//   -webkit-transform: translateY(6px);
//   -ms-transform: translateY(6px);
//   transform: translateY(6px);
//   -webkit-animation-name: hover-shadow;
//   animation-name: hover-shadow;
//   -webkit-animation-duration: 1.5s;
//   animation-duration: 1.5s;
//   -webkit-animation-delay: .3s;
//   animation-delay: .3s;
//   -webkit-animation-timing-function: linear;
//   animation-timing-function: linear;
//   -webkit-animation-iteration-count: infinite;
//   animation-iteration-count: infinite;
//   -webkit-animation-direction: alternate;
//   animation-direction: alternate;
// }
// &:hover{
//     background-color: #e16e50;
// }
// }

// @keyframes hover {
// 50% {
// -webkit-transform: translateY(-3px);
// -ms-transform: translateY(-3px);
// transform: translateY(-3px);
// }

// 100% {
// -webkit-transform: translateY(-6px);
// -ms-transform: translateY(-6px);
// transform: translateY(-6px);
// }
// }

// @-webkit-keyframes hover-shadow {
// 0% {
// -webkit-transform: translateY(6px);
// transform: translateY(6px);
// opacity: .4;
// }

// 50% {
// -webkit-transform: translateY(3px);
// transform: translateY(3px);
// opacity: 1;
// }

// 100% {
// -webkit-transform: translateY(6px);
// transform: translateY(6px);
// opacity: .4;
// }
// }

// @keyframes hover-shadow {
// 0% {
// -webkit-transform: translateY(6px);
// -ms-transform: translateY(6px);
// transform: translateY(6px);
// opacity: .4;
// }

// 50% {
// -webkit-transform: translateY(3px);
// -ms-transform: translateY(3px);
// transform: translateY(3px);
// opacity: 1;
// }

// 100% {
// -webkit-transform: translateY(6px);
// -ms-transform: translateY(6px);
// transform: translateY(6px);
// opacity: .4;
// }
// }

// @-webkit-keyframes hover {
// 50% {
// -webkit-transform: translateY(-3px);
// transform: translateY(-3px);
// }

// 100% {
// -webkit-transform: translateY(-6px);
// transform: translateY(-6px);
// }
// }

// @keyframes hover {
// 50% {
// -webkit-transform: translateY(-3px);
// -ms-transform: translateY(-3px);
// transform: translateY(-3px);
// }

// 100% {
// -webkit-transform: translateY(-6px);
// -ms-transform: translateY(-6px);
// transform: translateY(-6px);
// }
// `;
export default Button;
