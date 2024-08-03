import React from "react";
import "./css/WidgetContent.css";

function WidgetContent() {
  return (
    <div className="widget__contents">
      <div className="widget__content">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeON_jyeZWDm-prr5yYVlBeddwfyD90WB24Q&s"
          alt=""
        />
        <div className="widget__contentTitle">
          <h5>Mobile App Programmer</h5>
          <p>The best mobile app development company</p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
