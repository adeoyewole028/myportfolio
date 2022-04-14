import React, { useState } from "react";

const Contacts = ({ type, placeholder }) => {
  const [input, setInput] = useState("");
  const [textArea, setTextArea] = useState("");

  const handleOnChange = (e) => {
    setInput((prevState) => prevState(e.target.value));
  };
  const handleTextAreaChange = (e) => {
    setTextArea((prevState) => prevState(e.target.value));
  };

  return (
    <div className="p-3">
      <div className="flex flex-col w-80">
        {type === "textarea" ? (
          <textarea
            name="message"
            value={textArea}
            onChange={handleTextAreaChange}
            placeholder={placeholder}
            className="text-lg p-2 outline-cyan-500 rounded" required
          />
        ) : (
          <input
            type="text"
            name="name"
            value={input}
            onChange={handleOnChange}
            placeholder={placeholder}
            className="text-lg p-2 outline-cyan-500 rounded" required
          />
        )}
      </div>
    </div>
  );
};

export default Contacts;
