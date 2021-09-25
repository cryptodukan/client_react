import React from "react";
import "./style.scss";

export default function NotificationCard() {
  return (
    <div className="notificationCard">
      <div className="notificationCard__type">
        <i className="ri-gift-line"></i>
      </div>
      <div className="notificationCard__description">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
          delectus quasi architecto, ex adipisci doloremque expedita quia, nihil
          reiciendis quod iste fugit odio. Perspiciatis labore possimus
          accusamus debitis eius sunt?
        </p>
        <div className="notificationCard__description__timeAndDate">
          Sep 22 2021, 07:15 PM
        </div>
      </div>
    </div>
  );
}
