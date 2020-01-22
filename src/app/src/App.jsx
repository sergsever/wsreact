import React from "react";
import ReactDom from "react-dom";

console.log("before comp");

export default class App extends React.Component {

    render() {
        console.log("An App render");
        return <h1>Hello from React</h1>
    }
}



console.log("before dom");
ReactDom.render(<App />, document.getElementById('react'));
