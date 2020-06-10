import React from "react";
import { StyledForm, StyledButtonsContainer } from "./StyledForm";

const Submit = ({ navigation }) => {
  const { go } = navigation;
  return (
    <StyledForm>
      <h3>Thank you for submitting. We will be in touch</h3>
      <StyledButtonsContainer>
        <button style={{ gridColumn: '1/-1' }} onClick={() => go("names")}>New Form</button>
      </StyledButtonsContainer>

    </StyledForm>
  );
};

export default Submit;
