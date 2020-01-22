import ReactDOM from './react/react-dom.js'
import * as App from './dist/App_bundle.js'
console.log("index");
function tick() {
    ReactDOM.render(App, document.getElementById('react'));
}

tick();