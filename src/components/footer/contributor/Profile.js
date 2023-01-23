// import React from "react";

// export default function Profile(props) {
//   return (
//     <div className="profile-comtainer">
//       <div className="card">
//         {/* <img className="profile--image" src={props.url} alt="profilepic" /> */}
//         <h2>{props.name}</h2>
//         <p className="linkedin">{props.linkedin}</p>
//         <p>{props.description}</p>
//         <p>
//           <button>Connect Me</button>
//         </p>
//       </div>
//     </div>
//   );
// }
import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

const Profile = (props) => {
  return (
    <MDBCard>
      <MDBCardImage src={props.url} position='top' alt='profilepic' />
      <MDBCardBody>
        <MDBCardTitle>{props.name}</MDBCardTitle>
        <MDBCardText>
          {props.description}
        </MDBCardText>
        <MDBBtn href={props.linkedin}>Contact</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  )
}

export default Profile