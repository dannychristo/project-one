import React from "react";
import Header from './Header';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import TinderCards from './TinderCards';
import TinderCards2 from "./TinderCards2";
import Chats from "./Chat folder/Chats";
import ChatScreen from "./ChatScreen";
import Map from "./Map";
import Gasprices from "./Gasprices";
import './App.css';
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Chat folder/Home";


function App() {
  


  return (
    <div className="App">
      <Router>
          <Routes>
          <Route path="/" element={
            <div>
              <Header/>
              <ProtectedRoute>
                <TinderCards />  
              </ProtectedRoute>
                       
              {/*<SwipeButtons />*/}
            </div>} 
          />

          <Route path="/Login_page" element = {
          <div>
            <Header backButton="/"/>
            <LoginPage/>
           
           </div>}
          />
          <Route path="Register" element = {
            <div>
              <Header backButton="/"/>
              <RegisterPage/>
            </div>
          }/>
           

          <Route path="/Gasprice" element = {
          <div>
            <Header backButton ="/Login_page"/>
            <Gasprices/>
            </div>}/>
            

          <Route path="/chat" element={
            <div>
              <Header backButton="/" />
              <ProtectedRoute>
                <Home />
                </ProtectedRoute>
                
            </div>} 
          />
          <Route path="/chat/:person" element={
            <div>
              <Header backButton="/chat" />
               
              <ProtectedRoute>
                <ChatScreen/>
                </ProtectedRoute>
                
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