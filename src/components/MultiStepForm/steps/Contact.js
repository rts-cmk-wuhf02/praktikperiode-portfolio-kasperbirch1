import React from "react";
import { StyledButtonsContainer, TESTFORMCONTAINER } from "../StyledMultiStepForm";

const Contact = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  return (
    <>
      <TESTFORMCONTAINER>
        <label htmlFor="phone">phone</label>
        <input type="tel" name="phone" id="phone" value={phone} onChange={setForm} />
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" value={email} onChange={setForm} />
      </TESTFORMCONTAINER>
      <StyledButtonsContainer>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </StyledButtonsContainer>
    </>
  );
};

export default Contact;
