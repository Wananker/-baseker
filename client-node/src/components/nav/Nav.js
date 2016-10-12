import React, {Component, PropTypes} from "react";
import {IndexLink,Link} from "react-router";
import "./style.scss";
class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav_header">
                    <IndexLink to="/" activeClassName="nav_active">主页</IndexLink>
                    <Link to="/counter" activeClassName="nav_active">组件</Link>
                    <Link to="/about" activeClassName="nav_active">关于</Link>
                    </div>
                <div className="clear"></div>
            </div>
        );
    }
}
export default Nav;