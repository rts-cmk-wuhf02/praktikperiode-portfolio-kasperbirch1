import React from "react";
import { StyledButtonsContainer } from "../StyledMultiStepForm";

const Submit = ({ navigation }) => {
  const { go } = navigation;
  return (
    <>
      <h3>Thank you for submitting. We will be in touch</h3>
      <StyledButtonsContainer>
        <button style={{ gridColumn: '1/-1' }} onClick={() => go("names")}>New Form</button>
      </StyledButtonsContainer>
    </>
  );
};

export default Submit;
