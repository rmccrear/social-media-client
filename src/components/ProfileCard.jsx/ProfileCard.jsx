import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profile2.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Vaibhav sharma</span>
        <span>A Bad Man</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>10k</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>10</span>
            <span>Following</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
