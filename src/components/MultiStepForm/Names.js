import React from "react";
import { StyledForm, StyledButtonsContainer } from "./StyledForm";

const Names = ({ setForm, formData, navigation }) => {
  const { firstName, lastName } = formData;

  const { previous, next } = navigation;


  return (
    <StyledForm>
      <label htmlFor="firstName">firstName</label>
      <input type="text" name="firstName" id="firstName" value={firstName} onChange={setForm} />
      <label htmlFor="lastName">lastName</label>
      <input type="text" name="lastName" id="lastName" value={lastName} onChange={setForm} />
      <StyledButtonsContainer>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </StyledButtonsContainer>
    </StyledForm>
  );
};

export default Names;
