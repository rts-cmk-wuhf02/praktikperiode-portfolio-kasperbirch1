import React from "react";
import { StyledForm, StyledButtonsContainer } from "./StyledForm";


import ItemForm from "./ItemForm";
import StateDrop from "./StateDrop";

const Address = ({ setForm, formData, navigation }) => {
  const { address, city, zip } = formData;

  const { previous, next } = navigation;

  return (
    <StyledForm>
      <label>address</label>
      <input type="text" name="address" id="address" value={address} onChange={setForm} />
      <label>city</label>
      <input type="text" name="city" id="city" value={city} onChange={setForm} />
      <label>zip</label>
      <input type="text" name="zip" id="zip" value={zip} onChange={setForm} />
      <StyledButtonsContainer>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </StyledButtonsContainer>
    </StyledForm>
  );
};

export default Address;
