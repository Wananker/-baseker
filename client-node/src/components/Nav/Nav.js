import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
import "./style.scss";
class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav_header">
                    <Link to="/">主页</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        );
    }
}
export default Nav;