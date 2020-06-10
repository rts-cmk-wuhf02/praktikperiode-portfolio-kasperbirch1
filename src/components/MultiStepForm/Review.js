import React from "react";
import { StyledForm } from "./StyledForm";


const Review = ({ setForm, formData, navigation }) => {
  const {
    firstName,
    lastName,
    nickName,
    address,
    city,
    state,
    zip,
    phone,
    email,
    technology
  } = formData;
  const { go } = navigation;

  return (
    <StyledForm>
      <h3>Review your data {technology}</h3>
      <button onClick={() => go("technology")}>Edit</button>
      <h4>
        Name
        <button onClick={() => go("names")}>Edit</button>
      </h4>
      <div>
        {" "}
        First name: {`${firstName}`},
        <br />
        Last Name: {`${lastName}`},
      </div>
      <div>Nick Name: {`${nickName}`}</div>
      <h4>
        Address
        <button onClick={() => go("address")}>Edit</button>
      </h4>
      <div>
        Address: {`${address}`},
        <br />
        City: {` ${city}`},
        <br />
        State: {`${state}`},
        <br />
        ZIP: {`${zip}`}
      </div>
      <h4>
        Contact
        <button onClick={() => go("contact")}>Edit</button>
      </h4>
      <div>
        Phone: {`${phone}`},
        <br />
        E-mail: {`${email}`}
      </div>
      <div>
        <button onClick={() => go("submit")}>Submit</button>
      </div>
    </StyledForm>
  );
};

export default Review;
