import React from "react";
import "./style.scss";

// @components
import { Button } from "@material-ui/core";

export default function SingleProductFocused() {
  return (
    <div className="singleProductFocused">
      {/* <div className="singleProductFocused__title">
        section => free delivery
        <div className="singleProductFocused__title__freeDelivery">
          <div>
            <b>Free Delivery</b>
            <p>Over 1000 USDT</p>
          </div>
          <i className="ri-truck-line"></i>
        </div>

        section => on time delivery
        <div className="singleProductFocused__title__onTimeDelivery">
          <div>
            <p>Shop Online</p>
            <b>
              get your shopping on time
            </b>
          </div>
          <i className="ri-timer-line"></i>
        </div>
      </div> */}

      {/* section => product */}
      <div className="singleProductFocused__product">
        {/* section => product image */}
        <div className="singleProductFocused__productImage">
          <img
            src="https://images.unsplash.com/photo-1612103625782-9e3620965384?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="Car"
          />
        </div>

        {/* section => product detail */}
        <div className="singleProductFocused__productDetails">
          <h1>1975 Porche 911</h1>
          <h3>25000 USDT</h3>

          <div className="product_colors">
            {[
              "rgba(231, 76, 60,1.0)",
              "rgba(46, 204, 113,1.0)",
              "rgba(52, 152, 219,1.0)",
              "rgba(241, 196, 15,1.0)",
            ].map((color) => (
              <Button style={{ background: color }}></Button>
            ))}
          </div>

          <p className="product_description">
            In model year 1975, thanks to turbocharging, a particularly powerful
            version of the Porsche 911 – the 911 Turbo – came onto the market.
            Since its market launch in MY 1975, the 911 Turbo (initially named
            internally as the 930) has been the top-of-the-range model in the
            911 model line.
            <br />
            <br />
            Displacement/power: - MY 1975-77 - 3.0 litres, 260 hp. MY 1978-89 -
            3.3 litres, 300 hp
          </p>

          <div className="additional_information">
            <div>
              <i className="ri-shopping-bag-3-line"></i>
              <span>Free shipping for more than 1000 USDT purchase</span>
            </div>

            <div>
              <i className="ri-landscape-line"></i>
              <span>CO2 neutral shipping</span>
            </div>
            <div>* 3 days free return and free exchange</div>
          </div>

          <div className="checkout">
            <Button className="checkout__addToCart">Add to shopping cart</Button>
            <Button className="checkout__heart"><i className="ri-heart-3-line"></i></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
