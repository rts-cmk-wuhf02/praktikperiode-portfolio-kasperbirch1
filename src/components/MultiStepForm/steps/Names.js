import React from "react";
import { StyledButtonsContainer, StyledMultiStepForm } from "../StyledMultiStepForm";

const Names = ({ setForm, formData, navigation }) => {
  const { firstName, lastName } = formData;
  const { previous, next } = navigation;

  return (
    <>
      <StyledMultiStepForm>
        <label htmlFor="firstName">firstName</label>
        <input type="text" name="firstName" id="firstName" value={firstName} onChange={setForm} />
        <label htmlFor="lastName">lastName</label>
        <input type="text" name="lastName" id="lastName" value={lastName} onChange={setForm} />
      </StyledMultiStepForm>
      <StyledButtonsContainer>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </StyledButtonsContainer>
    </>
  );
};

export default Names;
