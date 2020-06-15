import React from "react";

const Review = ({ setForm, formData, navigation }) => {
  const {
    technology,
    firstName,
    lastName,
    address,
    city,
    zip,
    phone,
    email
  } = formData;
  const { go } = navigation;

  return (
    <>
      <h3>Review your data</h3>

      <p>Technology: {technology}</p>
      <button onClick={() => go("technology")}>Edit</button>

      <p>Name: {`${firstName} ${lastName}`}</p>
      <button onClick={() => go("names")}>Edit</button>

      <p>Address: {`${address}, ${city}, ${zip}`}</p>
      <button onClick={() => go("address")}>Edit</button>

      <p>Contact: {`${phone} / ${email} `}</p>
      <button onClick={() => go("contact")}>Edit</button>

      <button onClick={() => go("submit")}>Submit</button>
    </>
  );
};

export default Review;
