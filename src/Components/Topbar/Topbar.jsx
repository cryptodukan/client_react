import { Button } from "@material-ui/core";
import React from "react";
import "./style.scss";

export default function Topbar() {
  // @dev state to hide or display topbar
  const [hidden, setHidden] = React.useState(false);

  return (
    !hidden && (
      <div className="topbar">
        <span>🔔 Now you can buy things online with crypto here in Nepal.</span>
        <Button onClick={() => setHidden(true)}>
          <i className="ri-delete-bin-line"></i>
        </Button>
      </div>
    )
  );
}
