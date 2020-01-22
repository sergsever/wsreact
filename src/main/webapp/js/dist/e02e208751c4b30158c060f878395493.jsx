import React from "react";
import ReactDom from "react-dom";
import {Logger, ConsoleLogger} from "react-console-logger";
const log = new Logger();

class App extends React.Component {

    render() {
        log.info("An App render");
        return <p>Hello, World!</p>
    }
}
ReactDom.render(<App />, document.getElementById('react'));