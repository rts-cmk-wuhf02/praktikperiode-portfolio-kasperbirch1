import React from "react";
import { useForm, useStep } from "react-hooks-helper";

import Technology from "./steps/Technology";
import Names from "./steps/Names";
import Address from "./steps/Address";
import Contact from "./steps/Contact";
import Review from "./steps/Review";
import Submit from "./steps/Submit";

const steps = [
    { id: "technology" },
    { id: "names" },
    { id: "address" },
    { id: "contact" },
    { id: "review" },
    { id: "submit" }
];

const defaultData = {
    technology: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zip: "",
    email: "",
    phone: ""
};

const MultiStepForm = ({ images }) => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({ initialStep: 0, steps });
    const { id } = step;

    const props = { formData, setForm, navigation };

    switch (id) {
        case "technology":
            return <Technology {...props} />;
        case "names":
            return <Names {...props} />;
        case "address":
            return <Address {...props} />;
        case "contact":
            return <Contact {...props} />;
        case "review":
            return <Review {...props} />;
        case "submit":
            return <Submit {...props} />;
        default:
            return null;
    }
};

export default MultiStepForm;
