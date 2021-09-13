import React from "react";
import "./style.scss";

// @packages
import { Button } from "@material-ui/core";

// @components
import FilterDrawer from "../../Components/FilterDrawer/FilterDrawer";
import ProductCard from "../../Components/ProductCard/ProductCard";

// @helpers
import TopPickItems from "../../Helpers/TopPickProducts.json";

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
    </div>
  );
}
