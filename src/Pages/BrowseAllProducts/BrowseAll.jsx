import React from "react";
import "./style.scss";

// @packages
import { Button } from "@material-ui/core";

// @components
import FilterDrawer from "../../Components/FilterDrawer/FilterDrawer";
import ProductCard from "../../Components/ProductCard/ProductCard";

// @helpers
import TopPickItems from "../../Helpers/TopPickProducts.json";
import ToysAndGames from "../../Helpers/ToysAndGames.json";
import VehiclesProducts from "../../Helpers/VehiclesProducts.json";
import BrowseAllClothingProducts from "../../Helpers/BrowseAllClothingProducts.json";
import BrowseAllElectronics from "../../Helpers/BrowseAllElectronics.json";

export default function BrowseAll() {
  return (
    <div className="browseAll">
      {/* section => top picks */}
      <div className="browseAll__topPicks">
        {/* section => top picks => title */}
        <div className="browseAll__topPicks__title">
          <h3>Today's Top Picks</h3>

          <div className="browseAll__topPicks__title__filters">
            <FilterDrawer />

            <Button>
              <span>
                Sort By:
                <select name="" id="" defaultValue="featured">
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-htl">Price: High to Low</option>
                  <option value="price-lth">Price: Low to High</option>
                </select>
              </span>
            </Button>
          </div>
        </div>

        {/* section => top picks => items */}
        <div className="browseAll__topPicks__items">
          {TopPickItems.map((item) => (
            <ProductCard key={item.productName} item={item} />
          ))}
        </div>
      </div>

      <hr />

      {/* section => toys & games */}
      <div className="browseAll__ToysAndGames">
        {/* section => toys & games => title */}
        <div className="browseAll__ToysAndGames__title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Toys & Games</h3>{" "}
            <i
              style={{ marginLeft: "5px", fontSize: "25px" }}
              className="ri-gamepad-line"
            ></i>
          </div>
        </div>

        {/* section => toys & games => items */}
        <div className="browseAll__ToysAndGames__items">
          {ToysAndGames.map((item) => (
            <ProductCard key={item.productName} item={item} />
          ))}
        </div>
      </div>

      <hr />

      {/* section => vehicles */}
      <div className="browseAll__vehicles">
        {/* section => vehicles => title */}
        <div className="browseAll__vehicles__title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Vehicles</h3>{" "}
            <i
              style={{ marginLeft: "5px", fontSize: "25px" }}
              className="ri-bike-line"
            ></i>
          </div>
        </div>

        {/* section => vehicles => items */}
        <div className="browseAll__vehicles__items">
          {VehiclesProducts.map((item) => (
            <ProductCard key={item.productName} item={item} />
          ))}
        </div>
      </div>

      <hr />

      {/* section => clothing */}
      <div className="browseAll__clothing">
        {/* section => clothing => title */}
        <div className="browseAll__clothing__title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Clothing</h3>{" "}
            <i
              style={{ marginLeft: "5px", fontSize: "25px" }}
              className="ri-shirt-line"
            ></i>
          </div>
        </div>

        {/* section => clothing => items */}
        <div className="browseAll__clothing__items">
          {BrowseAllClothingProducts.map((item) => (
            <ProductCard key={item.productName} item={item} />
          ))}
        </div>
      </div>

      <hr />

      {/* section => electronics */}
      <div className="browseAll__electronics">
        {/* section => electronics => title */}
        <div className="browseAll__electronics__title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Electronics</h3>{" "}
            <i
              style={{ marginLeft: "5px", fontSize: "25px" }}
              className="ri-calculator-line"
            ></i>
          </div>
        </div>

        {/* section => electronics => items */}
        <div className="browseAll__electronics__items">
          {BrowseAllElectronics.map((item) => (
            <ProductCard key={item.productName} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
