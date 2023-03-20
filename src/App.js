import React from "react";
import Header from './Header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TinderCards from './TinderCards';
import TinderCards2 from "./TinderCards2";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import Map from "./Map";
import Navbar from "./Navbar";
import Gasprices from "./Gasprices";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <div>
              <Header />
              <TinderCards />
              {/*<SwipeButtons />*/}
            </div>} 
          />

          <Route path="/Login_page" element = {
          <div>
            <Header backButton="/"/>
           <Navbar />
           </div>}
          />
           

          <Route path="/Gasprice" element = {
          <div>
            <Header backbutton ="Login_page"/>
            <Gasprices/>
            </div>}/>
            

          <Route path="/chat" element={
            <div>
              <Header backButton="/" />
              <Chats />
            </div>} 
          />
          <Route path="/chat/:person" element={
            <div>
              <Header backButton="/chat" />
              <ChatScreen />
            </div>} 
          />
          <Route path="/map" element={
            <div>
              <Header backButton="/" />
              <Map />
            </div>} 
          />
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
