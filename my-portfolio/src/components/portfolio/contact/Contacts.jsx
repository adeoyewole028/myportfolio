import React, { useState } from "react";

const Contacts = ({ type, placeholder }) => {
  const [state, setState] = useState({ email: "", textarea: "", name: "" });

  const handleOnChange = (e) => {
    setState({ ...state, [e.target.value]: e.target.value });
  };

  return (
    <div className="p-3">
      <div className="flex flex-col w-80">
        {type === "textarea" ? (
          <textarea
            value={state.textarea}
            name="message"
            onChange={handleOnChange}
            placeholder={placeholder}
            className="text-lg p-2 outline-cyan-500 rounded"
            required
          />
        ) : type === "email" ? (
          <input
            type="email"
            value={state.email}
            onChange={handleOnChange}
            placeholder={placeholder}
            className="text-lg p-2 outline-cyan-500 rounded"
            required
          />
        ) : (
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleOnChange}
            placeholder={placeholder}
            className="text-lg p-2 outline-cyan-500 rounded"
            required
          />
        )}
      </div>
      <h1>{state.textarea}</h1>
    </div>
  );
};

export default Contacts;
