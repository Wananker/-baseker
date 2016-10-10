import React, {Component, PropTypes} from "react";
import Nav from "../components/nav/Nav";

class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                {this.props.children}
            </div>
        )
    }
}
export default App
