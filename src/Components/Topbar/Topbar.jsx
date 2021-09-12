import { Button } from "@material-ui/core";
import React from "react";
import "./style.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <span>🔔 Now you can buy things online with crypto here in Nepal.</span>
      <Button>
        <i className="ri-delete-bin-line"></i>
      </Button>
    </div>
  );
}
