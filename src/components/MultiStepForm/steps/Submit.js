import React from "react";
import { StyledButtonsContainer, StyledMultiStepForm } from "../StyledMultiStepForm";

const Submit = ({ navigation }) => {
  const { go } = navigation;
  return (
    <>
      <StyledMultiStepForm>
        <h3>Thank you for submitting. We will be in touch</h3>
      </StyledMultiStepForm>
      <StyledButtonsContainer>
        <button style={{ gridColumn: '1/-1' }} onClick={() => go("names")}>New Form</button>
      </StyledButtonsContainer>
    </>
  );
};

export default Submit;
