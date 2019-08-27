import React from 'react';
import {
    withRouter, Switch, Route
} from 'react-router-dom';



const Homepage = (params) => (
    <h1>Home Page</h1>
)

const Aboutpage = (params) => (
    <h1>About Page</h1>
)

// uses the match param that is given when a component is rendered from within a 
// Route component
// the path is arbitrary and that match variable is assigned to the route and the
// content within the div when a NavLink is used that points to the Matchcomponent
const Matchcomponent = ({ match }) => (
    <h1>Hello, {match.params.name}</h1>
)

// if you need to pass props into your component, you can do so with replacing
// the component prop inside the Route Component with a render prop
const hobbies = ["Eating", "Breathing", "Sleeping"];
const Hobbies = ({hobbies}) => (
    <ul>
        {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
        ))}
    </ul>
)



// the statements inside the switch tags work as if else statements
// if path = x then render this component, ect ect
// components rendered from a route component have access to three special params
// match, location, and history
// if component is not rendered within a Route component,
// it can still be given these three props by wrapping it within a withRouter function
const SwitchDemo = ({ history }) => [
    <Switch>
        <Route path="/about" component={Aboutpage}></Route>
        <Route path="/hobbies" 
        // instead of directly saying which component to use, we are using render that takes a props arg
        // which gives it access to match location and history, the spread operator assigns those props to the 
        // component within its props area
        // finally we are assigning the value of it's hobbies prop that it is expecting from it's component
        // definition
            render={props => (<Hobbies {...props} hobbies={hobbies}></Hobbies>)}
        
        ></Route>
        <Route path="/:name" component={Matchcomponent}></Route>
        <Route path="/" component={Homepage}></Route>
    </Switch>,
    // button that is outside of the Route component but still wants access to history
    // history is given to the component as a prop, and the component is granted access
    // to the three params when we export it with router.

    // history.push changes url to given params
    <button onClick={() => history.push("/")}>Go Home</button>
]






// wrapping the SwitchDemo Component in a withRouter function when exporting to give 
// the access to the match, location and history props
export default withRouter(SwitchDemo);