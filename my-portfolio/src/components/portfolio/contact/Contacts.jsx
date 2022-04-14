import React from "react";

const Contacts = ({ type, placeholder }) => {
  console.log(type);

  return (
    <div className="p-3">
      <div className="flex flex-col w-80">
        {type === "textarea" ? (
          <textarea
            placeholder={placeholder}
            className="text-lg p-2 outline-cyan-500 rounded"
          />
        ) : (
          <input
            placeholder={placeholder}
            className="text-lg p-2 outline-cyan-500 rounded"
          />
        )}

      </div>
    </div>
  );
};

export default Contacts;
