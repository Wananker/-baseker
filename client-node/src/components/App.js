import React, {Component, PropTypes} from "react";
import  {Alert, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

class App extends Component {

    render() {

        const {alertVisible, alertMessage, show_alert, hide_alert} = this.props;
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Toggle/>
                        <Navbar.Brand>
                            <a href="#">React-Bootstrap</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={2} href="#/counter">Counter</NavItem>
                            <NavItem eventKey={1} href="#/about">About</NavItem>
                            <NavItem eventKey={1} href="#/article">Article</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                { alertVisible ? <Alert bsStyle="danger" onDismiss={hide_alert}>
                        <h4>{alertMessage}</h4>
                    </Alert> : null
                }
                <div >
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default App
