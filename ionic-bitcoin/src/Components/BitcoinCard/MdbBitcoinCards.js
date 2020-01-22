import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer, MDBIcon } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';

const MdbBitcoinCard = (props) => (
<MDBContainer>
  <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardHeader color="primary-color" tag="h3">
    <MDBIcon fab icon="bitcoin" size="1x" className="white-text pr-3" />
    Bitcoin Price 
    </MDBCardHeader>
    <MDBCardBody>
      <MDBCardText>
      {props.data.code}
      </MDBCardText>
      <MDBCardTitle>
      {props.data.rate_float}
      </MDBCardTitle>
      <MDBBtn color="primary">Buy now!</MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
);

export default MdbBitcoinCard;