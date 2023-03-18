import React from "react";
import Header from './Header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TinderCards from './TinderCards';
import TinderCards2 from "./TinderCards2";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import Map from "./Map";

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <div>
              <Header />
              <TinderCards2 />
              {/*<SwipeButtons />*/}
            </div>} 
          />
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
