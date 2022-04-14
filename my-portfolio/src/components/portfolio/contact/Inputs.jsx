import React, { useState } from "react";
import { FormInputs } from "./ContactData";
import Contacts from "./Contacts";

const input = FormInputs.map((input) => <Contacts key={input.id} {...input} />);

const Inputs = () => {
  const [submit, setSubmit] = useState("");
  const handleSubmit = (e) => {
    setSubmit((prevState) => prevState(e.target.value));
  };
  return (
    <form
      name="contact"
      method="post"
      onSubmit={handleSubmit}
      className="flex flex-col"
    >
    <input type="hidden" name="form-name" value="contact" />
      {input}

      <div className="p-3">
        <button
          value={submit}
          className="p-2 bg-green-500 rounded w-32"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Inputs;
