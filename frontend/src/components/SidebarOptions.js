import { Add } from "@material-ui/icons";
import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://e7.pngegg.com/pngimages/444/928/png-clipart-open-history-free-content-book-geography-history-channel-text-logo-thumbnail.png"
          alt=""
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://w7.pngwing.com/pngs/32/586/png-transparent-customer-relationship-management-business-company-business-thumbnail.png"
          alt=""
        />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://w7.pngwing.com/pngs/572/81/png-transparent-multicolored-brain-illustration-educational-psychology-institute-for-the-psychological-sciences-learning-psychologist-cerebro-digital-computer-wallpaper-psychology-teacher-thumbnail.png"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2L6lgb7pN19mGiFY5itDr_Wm1T1BxvBX26g&s"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKsP35LQIzK16zGomrGGnWTvnbvP373Hwig&s"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://w7.pngwing.com/pngs/495/835/png-transparent-paper-science-sticker-technology-knowledge-science-laboratory-things-illustration-experiment-laboratory-engineering-thumbnail.png"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://w7.pngwing.com/pngs/382/58/png-transparent-health-lifestyle-computer-icons-healthy-lifestyle-hand-logo-nutrition-thumbnail.png"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpxjjiALAcxw9Tj64F4S1ByTeAPM2X5HLiw&s"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://c0.klipartz.com/pngpicture/423/393/gratis-png-tecnologia-y-tecnologia-de-alta-tecnologia-pty-ltd-tecnologia-thumbnail.png"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://e7.pngegg.com/pngimages/82/964/png-clipart-globe-with-educational-hat-illustration-distance-education-teacher-school-training-education-icon-miscellaneous-globe-thumbnail.png"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
