import React from "react";
import { StyledForm, StyledButtonsContainer } from "./StyledForm";

const Address = ({ setForm, formData, navigation }) => {
  const { address, city, zip } = formData;

  const { previous, next } = navigation;

  return (
    <StyledForm>
      <label htmlFor="address">address</label>
      <input type="text" name="address" id="address" value={address} onChange={setForm} />
      <label htmlFor="city">city</label>
      <input type="text" name="city" id="city" value={city} onChange={setForm} />
      <label htmlFor="zip">zip</label>
      <input type="text" name="zip" id="zip" value={zip} onChange={setForm} />
      <StyledButtonsContainer>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </StyledButtonsContainer>
    </StyledForm>
  );
};

export default Address;
