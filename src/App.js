import "./App.css";
import React from 'react';
// import TinderCard from 'react-tinder-card';
import Chats from './Chats'
import ChatScreen from './ChatScreen'

import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/match-chat/:person">
          <Header backButton='/match-chat' />
            <ChatScreen />
          </Route>
            {/* chat path */}
           <Route path='/match-chat'>
            <Header backButton='/' />
            <Chats />
          </Route>
          {/* <Route path="/counselor-chat">I am the counselor chat page!</Route> */}
          {/* Keep your default route at the bottom */}
            <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//  {/* <h1>Lets build a tinder clone</h1> */}
// //  <Header />
//  {/* tinder cards- REACT ROUTER - STOPS @ 48:23 on https://youtu.be/DQfeB_FKKkc */}
//  {/* buttons below tinder cards */}

//  {/* chat screen */}
//  {/* Individual chat screen */}
