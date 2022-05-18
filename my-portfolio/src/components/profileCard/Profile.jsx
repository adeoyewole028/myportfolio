import React, { useState } from "react";
import Red from "../../Images/red.jpg";
import { Icon } from "@iconify/react";

const Profile = () => {
  const [contact, setContact] = useState({
    firstName: "Adegboyega",
    lastName: "Oyewole",
    phone: "+234 70 681 233 559",
    email: "react.deve03@gmail.com",
    isFavorite: false,
  });

  let starIcon = contact.isFavorite ? "ep:star-filled" : "ei:star";

  const toggleFavorite = () => {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  };

  return (
    <main className="flex justify-center">
      <article className="flex justify-center flex-col mt-10">
        <img className="w-44 h-44 rounded-full" src={Red} alt="" />
        <div className="flex flex-col">
          <Icon
            className="text-5xl"
            icon={`${starIcon}`}
            onClick={toggleFavorite}
          />
          <h2 className="text-2xl font-bold">
            {contact.firstName} {contact.lastName}
          </h2>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
        </div>
      </article>
    </main>
  );
};
export default Profile;
