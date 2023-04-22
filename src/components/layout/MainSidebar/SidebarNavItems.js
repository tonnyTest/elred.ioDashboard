import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navItems: Store.getSidebarItems()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      navItems: Store.getSidebarItems()
    });
  }

  render() {
    const { navItems: items } = this.state;
    return (
      <div className="nav-wrapper mt-4 ml-4" style={{ background: "white", borderRadius: "0.625rem", boxShadow: "0 2px 0 rgba(90,97,105,.11), 0 4px 8px rgba(90,97,105,.12), 0 10px 10px rgba(90,97,105,.06), 0 7px 70px rgba(90,97,105,.1)" }}>
        <div className="d-table m-auto py-4" style={{ width: "50px", height: "50px"}}>
            <img
              id="main-logo"
              className="d-inline-block align-top mr-1"
              style={{ maxWidth: "100%" }}
              src={require("../../../images/logo.png")}
              alt="Shards Dashboard"
            />
          </div>
        
        <Nav className="nav--no-borders flex-column mx-3">
          {items.map((item, idx) => (
            <SidebarNavItem key={idx} item={item} />
          ))}
        </Nav>
      </div>
    )
  }
}

export default SidebarNavItems;
