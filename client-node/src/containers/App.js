import React, {Component, PropTypes} from "react";
import Nav from "../components/nav/Nav";

class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default App
