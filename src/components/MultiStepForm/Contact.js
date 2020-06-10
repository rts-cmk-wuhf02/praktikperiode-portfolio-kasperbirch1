import React from "react";
import { StyledForm } from "./StyledForm";

import ItemForm from "./ItemForm";

const Contact = ({ setForm, formData, navigation }) => {
  const { phone, email } = formData;

  const { previous, next } = navigation;

  return (
    <StyledForm>
      <h3>Contact </h3>
      <ItemForm label="Phone" name="phone" value={phone} onChange={setForm} />
      <ItemForm label="E-mail" name="email" value={email} onChange={setForm} />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </StyledForm>
  );
};

export default Contact;
