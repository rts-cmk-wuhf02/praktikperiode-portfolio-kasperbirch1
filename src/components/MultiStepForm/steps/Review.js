import React from "react";
import { StyledButtonsContainer, TESTFORMCONTAINER } from "../StyledMultiStepForm";
import styled from 'styled-components'
const StyledSpan = styled.span`
    font-size: 1.25rem;   
    color: white;
    margin-bottom: .5rem;
    border: 1px solid white;
    border-radius: .5rem;
    background-color: rgba(0,0,0,0.2);
    padding: .5rem;
`


const Review = ({ setForm, formData, navigation }) => {
  const {
    technology,
    firstName,
    lastName,
    address,
    city,
    zip,
    phone,
    email
  } = formData;
  const { go } = navigation;

  return (
    <>
      <TESTFORMCONTAINER>
        <h3>Review your data</h3>

        <label>Technology:</label>
        <StyledSpan>{technology}</StyledSpan>
        <button onClick={() => go("technology")}>Edit</button>

        <label>Name:</label>
        <StyledSpan>{`${firstName} ${lastName}`}</StyledSpan>
        <button onClick={() => go("names")}>Edit</button>

        <label>Address:</label>
        <StyledSpan>{`${address}, ${city}, ${zip}`}</StyledSpan>
        <button onClick={() => go("address")}>Edit</button>

        <label>Contact:</label>
        <StyledSpan>{phone} {email}</StyledSpan>
        <button onClick={() => go("contact")}>Edit</button>
      </TESTFORMCONTAINER>
      <StyledButtonsContainer>
        <button style={{ gridColumn: '1/-1' }} onClick={() => go("submit")}>Submit</button>
      </StyledButtonsContainer>
    </>
  );
};

export default Review;
