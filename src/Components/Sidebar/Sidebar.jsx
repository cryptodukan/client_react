import React from "react";
import "./style.scss";

// @packages
import { Button } from "@material-ui/core";
// import { useAuth0 } from '@auth0/auth0-react'

// @helpers
import Categories from "../../Helpers/SidebarCategories.json";
import Marketplaces from "../../Helpers/SidebarMarketplaces.json";

// @cont3xt
import { useActiveSidebarDataLayerValue } from "../../Context/ActiveSidebarItem";

export default function Sidebar() {
  const [{ active }, dispatch] = useActiveSidebarDataLayerValue();
  // const {loginWithRedirect, isAuthenticated} = useAuth0();

  // const auth = () => {
  //   loginWithRedirect()
  // }

  // @dev function to dispatch active tabs
  // @param active bar name
  const handleSidebarActiveDispatch = (payload) => {
    dispatch({
      type: "SET_ACTIVE_BAR",
      activeBar: payload,
    });
  };
  return (
    <div className="sidebar">
      <h1>Dukan.</h1>

      {/* section => searchbar */}
      <div className="sidebar__searchBar">
        <i className="ri-search-2-line"></i>
        <input type="text" placeholder="Seach Marketplace" />
      </div>

      {/* section => marketplace listing */}
      <div className="sidebar__marketplaceListing">
        {Marketplaces.map((item) => (
          <Button
          onClick={() => handleSidebarActiveDispatch(item.activeName)}
            key={item.name}
            className={`item ${active === item.activeName && "active"}`}
          >
            <i className={item.icon}></i> <span>{item.name}</span>
          </Button>
        ))}
      </div>
      <hr />

      {/* section => categories listing */}
      <div className="sidebar_categoryListing">
        <h3>Categories</h3>
        {Categories.map((category) => (
          <Button
          onClick={() => handleSidebarActiveDispatch(category.activeName)}
            key={category.name}
            className={`item ${active === category.activeName && "active"}`}
          >
            <i className={category.icon}></i> <span>{category.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
