import React from "react";
import "./style.scss";

// @assets
// import SkeletonImage from "../../Assets/ProductImageSkeleton.svg";

// @components
import Skeleton from "@material-ui/lab/Skeleton";

export default function ProductSkeleton() {
  return (
    <div className="productCardSkeleton">
      <Skeleton variant="rect" width="100%" height="250px" />

      <Skeleton
        variant="text"
        style={{
          margin: "12px 18px 0 18px",
        }}
      />

      <div className="productCardSkeleton__flex">
        <Skeleton variant="circle" width={40} height={40} />
        <Skeleton variant="text" width="60%" height={20} />
      </div>
    </div>
  );
}
