import React from "react";
import { StyledButtonsContainer, StyledMultiStepForm } from "../StyledMultiStepForm";
import styled from 'styled-components'
const StyledSpan = styled.span`
    font-size: 1.25rem;   
    color: white;
    margin-bottom: .25rem;
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
      <StyledMultiStepForm>
        <h3>Review your data</h3>

        <h4>Technology:</h4>
        <StyledSpan>{technology}</StyledSpan>
        <button onClick={() => go("technology")}>Edit</button>

        <h4>Name:</h4>
        <StyledSpan>{`${firstName} ${lastName}`}</StyledSpan>
        <button onClick={() => go("names")}>Edit</button>

        <h4>Address:</h4>
        <StyledSpan>{`${address}, ${zip} ${city}`}</StyledSpan>
        <button onClick={() => go("address")}>Edit</button>

        <h4>Contact:</h4>
        <StyledSpan>{phone} {email}</StyledSpan>
        <button onClick={() => go("contact")}>Edit</button>
      </StyledMultiStepForm>
      <StyledButtonsContainer>
        <button style={{ gridColumn: '1/-1' }} onClick={() => go("submit")}>Submit</button>
      </StyledButtonsContainer>
    </>
  );
};

export default Review;
