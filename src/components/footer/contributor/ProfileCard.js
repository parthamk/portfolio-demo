import React from 'react'
import './ProfileCard.css'

const Card = (props) => {
    return (
      <div className="card">
        <img src={props.img} className="img" alt='cardimage'/>
        <div className="body">
          <h2 className="title">{props.title}</h2>
          <p className="description">{props.description}</p>
            {/*<button className="btn">
                Connect Me
            </button>*/}
        </div>
      </div>
    );
  }

const ProfileCard = () => {
  return (
    <div className="wrapper">
            <Card
            img="https://avatars.githubusercontent.com/u/110176232?v=4"
            title="Anjali Yadav"
            description="Full-stack Web Developer"
            />

            <Card
            img="https://avatars.githubusercontent.com/u/104792763?v=40"
            title="Kanchana R"
            description="Full-stack Web Developer"
            />
            <Card
            img="https://avatars.githubusercontent.com/u/110169184?v=4"
            title="Partha Mallick"
            description="Full-stack web developer"
            />
            <Card
            img="https://avatars.githubusercontent.com/u/111684121?v=4"
            title="Nisha Rajak"
            description="Full-stack web developer"
            />
            <Card
            img="https://avatars.githubusercontent.com/u/111532433?v=4"
            title="Neha Nayek"
            description="Full-stack web developer"
            />
  </div>
  )
}

export default ProfileCard

