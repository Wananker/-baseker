import React, {Component, PropTypes} from "react";
import  {Alert, Button, Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

class App extends Component {

    render() {

        const {alertVisible, show_alert, hide_alert} = this.props;
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">React-Bootstrap</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={2} href="#/counter">Counter</NavItem>
                        <NavItem eventKey={1} href="#/about">About</NavItem>
                        <NavItem eventKey={1} href="#/article">Article</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
                { alertVisible ? <Alert bsStyle="danger" onDismiss={hide_alert}>
                        <h4>Oh snap! You got an error!</h4>
                        <p>Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor
                            ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                            fermentum.</p>
                        <p>
                            <Button onClick={hide_alert}>Hide Alert</Button>
                        </p>
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
