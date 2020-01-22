import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer} from "mdbreact";


const MdbLoadingCard = () => (
    <MDBContainer>
    <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
      <MDBCardHeader color="primary-color" tag="h3">
      </MDBCardHeader>
      <MDBCardBody>
        <MDBCardText className="spinner-grow text-primary" role="status">
        </MDBCardText>
        <MDBCardTitle className="spinner-grow text-primary" role="status">
        </MDBCardTitle>
        <MDBBtn color="primary"></MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </MDBContainer>
);

export default MdbLoadingCard;