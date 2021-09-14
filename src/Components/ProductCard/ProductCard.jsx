import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

// @dev props from browseall page
export default function ProductCard(item) {
  const {
    productName,
    productPrice,
    isOutOfStock,
    isFavorite,
    onSale,
    discount,
    isNew,
    productImage,
  } = item.item;

  return (
    <div className="productCard">
      {/* section => product card image container */}
      <div className="productCard__imgContainer">
        <Link to="#"><img src={productImage} alt={productName} unselectable="on"/></Link>

        <div
          className={`productCard__ticker ${isOutOfStock && "outOfStock"} ${
            isNew && "new"
          } ${onSale && "sale"}`}
        >
          {isOutOfStock && "Out of Stock"}
          {isNew && "New"}
          {onSale && "Sale"}
        </div>
      </div>

      {/* section => product description */}
      <div className="productCard__description">
        {/* section => product description => product name */}
        <div className="productCard__description__productName">
          <Link to="#">
            {productName.length >= 23
              ? `${productName.slice(0, 23)}...`
              : productName}
          </Link>
        </div>

        {/* section => product description => product price */}
        <div className="productCard__description__productPrice">
          <Button>
            <i
              className={`${
                isFavorite ? "ri-heart-3-fill" : "ri-heart-3-line"
              }`}
            ></i>
          </Button>

          <div>
            <span className="discountedPrice">
              {discount.isDiscounted && `${discount.initialPrice} USDT`}
            </span>{" "}
            <b>{productPrice} USDT</b>
          </div>
        </div>
      </div>
    </div>
  );
}
