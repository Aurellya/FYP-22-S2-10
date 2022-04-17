import React from "react";

const Card = ({ profile }) => {
  return (
    <div className="card mb-5">
      <img src={profile.img} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{profile.name}</h5>
        <p className="card-text">
          {profile.roles}
          <br />
          Contact: {profile.email}
        </p>
      </div>
    </div>
  );
};

export default Card;
