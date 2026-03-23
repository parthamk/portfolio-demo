import React from "react";
import "./ProfileCard.css";
import Marquee from "react-fast-marquee"; // Import react-fast-marquee

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} className="img" alt="cardimage" />
      <div className="body">
        <h2 className="title">{props.title}</h2>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
};

const ProfileCard = () => {
  return (
    <div className="wrapper">
      <Marquee>
        <div className="marquee-card">
          <Card
            img="https://avatars.githubusercontent.com/u/110176232?v=4"
            title="Anjali Yadav"
            description="Full-stack Web Developer"
            profileUrl="https://github.com/<your_profile>"
          />
        </div>

        <div className="marquee-card">
          <Card
            img="https://avatars.githubusercontent.com/u/104792763?v=40"
            title="Kanchana R"
            description="Full-stack Web Developer"
            profileUrl="https://github.com/<your_profile>"
          />
        </div>

        <div className="marquee-card">
          <Card
            img="https://avatars.githubusercontent.com/u/110169184?v=4"
            title="Partha Mallick"
            description="Full-stack web developer"
            profileUrl="https://github.com/<your_profile>"
          />
        </div>

        <div className="marquee-card">
          <Card
            img="https://avatars.githubusercontent.com/u/111684121?v=4"
            title="Nisha Rajak"
            description="Full-stack web developer"
            profileUrl="https://github.com/<your_profile>"
          />
        </div>

        <div className="marquee-card">
          <Card
            img="https://avatars.githubusercontent.com/u/111532433?v=4"
            title="Neha Nayek"
            description="Full-stack web developer"
            profileUrl="https://github.com/<your_profile>"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default ProfileCard;
