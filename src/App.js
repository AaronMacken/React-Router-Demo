import React from 'react';
import './App.css';
import SwitchDemo from './SwitchDemo';
// import statement for switch and route
import {
  Switch, Route
} from 'react-router-dom';
// link works as anchor tags
// react-router takes over when Link is used, and uses the history object to control
// the back and forward buttons, much like regular link behavior.
// import { Link } from 'react-router-dom';
// NavLink is similar to Link but it has additional settings for styling
import { NavLink } from 'react-router-dom';


class App extends React.Component {
  render() {
    const defaultStyle = {margin: "1rem", color: "gray", textDecoration: "none"};
    const activeStyle = {color: "pink"}
    return (
      <div className="App">
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
        {/* has default styles and also uses active style to determine how to style the link
        that matches the active route */}
        <NavLink exact to="/" style={defaultStyle} activeStyle={activeStyle}>Home</NavLink>
        <NavLink exact to="/about"  style={defaultStyle} activeStyle={activeStyle}>About</NavLink>
        <NavLink exact to="/Aaron"  style={defaultStyle} activeStyle={activeStyle}>Match Component</NavLink>
        <NavLink exact to="/Hobbies"  style={defaultStyle} activeStyle={activeStyle}>My Hobbies</NavLink>

        <SwitchDemo />
      </div>
    );
  }
}

export default App;
