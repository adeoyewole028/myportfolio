import React from "react";
import { FormInputs } from "./ContactData";
import Contacts from "./Contacts";

const input = FormInputs.map((input) => <Contacts key={input.id} {...input} />);

const Inputs = () => {
  return (
    <form className="flex flex-col">
      {input}
     
      <div className="p-3">
          <button className="p-2 bg-green-500 rounded w-32">Submit</button>
        </div>
    </form>
  );
};

export default Inputs;
