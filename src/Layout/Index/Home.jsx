import React from "react";
import "./style.scss";

// @Components
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";

// @Packages
import { Helmet } from "react-helmet";

// @cont3xt
import { useActiveSidebarDataLayerValue } from "../../Context/ActiveSidebarItem";

// @Pages
import BrowseAll from "../../Pages/BrowseAllProducts/BrowseAll";
import CheckoutButton from "../../Components/CheckoutButton/CheckoutButton";
import SingleProductFocused from "../../Pages/SingleProductFocused/Index";
import Notifications from "../../Pages/Notifications/Notifications";

export default function Home() {
  const [{ active }] = useActiveSidebarDataLayerValue();

  return (
    <div className="home">
      {/* section => In page SEO */}
      <Helmet>
        <title>Online shopping with crypto | Dukan</title>
      </Helmet>

      {/* section => main */}
      <Sidebar />
      <div className="home_main">
        <Topbar />

        {/* section => main => browse all */}
        {
          active === 'browse-all' && <BrowseAll/>
        }
        
        {/* section => main => notifications */}
        {
          active === 'notifications' && <Notifications/>
        }
        
        {/* section => main => product focused */}
        {
          active === 'product-focused' && <SingleProductFocused/>
        }

        <CheckoutButton/>
      </div>
    </div>
  );
}
