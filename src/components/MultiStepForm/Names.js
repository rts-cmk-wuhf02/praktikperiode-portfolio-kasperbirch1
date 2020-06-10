import React from "react";
import { StyledForm } from "./StyledForm";

const Names = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, nickName } = formData;

  const { previous, next } = navigation;


  return (
    <StyledForm>
      <label>
        firstName
      </label>
      <input type="text" name="firstName" id="firstName" value={firstName} onChange={setForm} />
      <label>
        Email
      </label>
      <input type="email" name="email" id="email" />
      <label>
        Subject
      </label>
      <input type="text" name="subject" id="subject" />
      <label>
        Message
      </label>
      <textarea name="message" id="message" rows="5" />
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </StyledForm>
  );
};

export default Names;
