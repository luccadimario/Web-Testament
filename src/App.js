import './App.css';
import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Purchase from "./pages/Purchase";
import Page from './pages/Page';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
import Page9 from './pages/Page9';
import Page10 from './pages/Page10';
import Page11 from './pages/Page11';
import Page12 from './pages/Page12';
import Page13 from './pages/Page13';
import Page14 from './pages/Page14';
import Page15 from './pages/Page15';
import Page16 from './pages/Page16';
import Page17 from './pages/Page17';
import Page18 from './pages/Page18';
import Page19 from './pages/Page19';
import Page20 from './pages/Page20';
import Page21 from './pages/Page21';
import Page22 from './pages/Page22';
import Page23 from './pages/Page23';
import Page24 from './pages/Page24';
import Page25 from './pages/Page25';
import Page26 from './pages/Page26';
import Page27 from './pages/Page27';
import Page28 from './pages/Page28';
import Page29 from './pages/Page29';
import Page30 from './pages/Page30';
import Page31 from './pages/Page31';
import Page32 from './pages/Page32';
import Page33 from './pages/Page33';
import Page34 from './pages/Page34';
import Page35 from './pages/Page35';
import Page36 from './pages/Page36';
import Page37 from './pages/Page37';
import Page38 from './pages/Page38';
import Page39 from './pages/Page39';
import Page40 from './pages/Page40';
import Page41 from './pages/Page41';
import Page42 from './pages/Page42';
import Page43 from './pages/Page43';
import Page44 from './pages/Page44';
import Page45 from './pages/Page45';
import Page46 from './pages/Page46';
import Page47 from './pages/Page47';
import Page48 from './pages/Page48';
import Page49 from './pages/Page49';
import Page50 from './pages/Page50';


var locationDNE = false;
export {locationDNE};
const App = () => {
  const pageArray = new Array(50)
  for(let i = 0; i < pageArray.length; i++) {
    pageArray[i] = Page
  }
  console.log(pageArray[0]);
  let function_mappings = {
    'Page1': pageArray[0],
    'Page2': pageArray[1],
    'Page3': Page3,
    'Page4': Page4,
    'Page5': Page5,
    'Page6': Page6,
    'Page7': Page7,
    'Page8': Page8,
    'Page9': Page9,
    'Page10': Page10,
    'Page11': Page11,
    'Page12': Page12,
    'Page13': Page13,
    'Page14': Page14,
    'Page15': Page15,
    'Page16': Page16,
    'Page17': Page17,
    'Page18': Page18,
    'Page19': Page19,
    'Page20': Page20,
    'Page21': Page21,
    'Page22': Page22,
    'Page23': Page23,
    'Page24': Page24,
    'Page25': Page25,
    'Page26': Page26,
    'Page27': Page27,
    'Page28': Page28,
    'Page29': Page29,
    'Page30': Page30,
    'Page31': Page31,
    'Page32': Page32,
    'Page33': Page33,
    'Page34': Page34,
    'Page35': Page35,
    'Page36': Page36,
    'Page37': Page37,
    'Page38': Page38,
    'Page39': Page39,
    'Page40': Page40,
    'Page41': Page41,
    'Page42': Page42,
    'Page43': Page43,
    'Page44': Page44,
    'Page45': Page45,
    'Page46': Page46,
    'Page47': Page47,
    'Page48': Page48,
    'Page49': Page49,
    'Page50': Page50
  }

  let Component
  switch(window.location.pathname) {
    case "/":
      locationDNE = false
      Component = Home
      break;
    case "/about":
      locationDNE = false
      Component = About
      break;
    case "/purchase":
      locationDNE = false
      Component = Purchase
      break;
    default:
      if((parseInt((window.location.pathname).substring(1)) <= 50) && (parseInt((window.location.pathname).substring(1)) >=0)) {
        let CompName = "Page" + ((window.location.pathname).substring(1))
        locationDNE = false
        console.log(CompName);
        Component = function_mappings[CompName];
        break;
      }
      else {
        locationDNE = true
        Component = Home
        break;
      }
      
    }
    return (<>
      <Navbar />
      <Component />
      
    </>
    );
}

export default App;