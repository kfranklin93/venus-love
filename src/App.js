import './App.css';
// import React, { Fragment } from 'react';
import TinderCard from 'react-tinder-card'

import Header from './Header';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
      <Switch>
        <Route path="/match-chat">
          I am the CHAT page
        </Route>
        <Route path="/counselor-chat">
          I am the counselor chat page! 
        </Route>
        {/* Keep your default route at the bottom */}
        <Route path="/">
          I am the home page!
        </Route>
      </Switch>
      </Router>
    </div>
  );
} 
// export const FragmentSupportingSwitch = ({children}) => {
//   const flattenedChildren = [];
//   flatten(flattenedChildren, children);
//   return React.createElement.apply(React, [Routes, null].concat(flattenedChildren));
// }

// function flatten(target, children) {
//   React.Children.forEach(children, child => {
//     if (React.isValidElement(child)) {
//       if (child.type === Fragment) {
//         flatten(target, child.props.children);
//       } else {
//         target.push(child);
//       }
//     }
//   });
// }
export default App;


//  {/* <h1>Lets build a tinder clone</h1> */}
// //  <Header />
//  {/* tinder cards- REACT ROUTER - STOPS @ 48:23 on https://youtu.be/DQfeB_FKKkc */} 
//  {/* buttons below tinder cards */}

//  {/* chat screen */}
//  {/* Individual chat screen */}