import React from "react";
import "./style.scss";

// @packages
import { Button } from "@material-ui/core";

export default function CheckoutButton() {
  return (
    <div className="checkoutButton">
      <Button>
        <i className="ri-shopping-cart-2-line"></i>
      </Button>
    </div>
  );
}
