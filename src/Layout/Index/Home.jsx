import React from "react";
import "./style.scss";

// @Components
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";

// @Packages
import { Helmet } from "react-helmet";

export default function Home() {
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
      </div>
    </div>
  );
}
