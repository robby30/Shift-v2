import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
import logo from "../../assets/images/logo.svg";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <a href="/" className="simple-text logo-mini">
            <div className="logo-img">
              <img src={logo} alt="react-logo" />
            </div>
          </a>
          <a href="/" className="simple-text logo-normal">
            Shift
          </a>
        </div>
        <div className="sidebar-wrapper" ref="sidebar">
          <Nav>
            <li className={this.activeRoute("/typography")}>
              <NavLink
                to="/typography"
                className="nav-link"
                activeClassName="active"
              >
                <p>Typography</p>
              </NavLink>
            </li>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
