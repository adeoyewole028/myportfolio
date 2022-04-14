import React from "react";
import Logo from "../../Images/Time--Logo.svg";
import { Button } from "./Main";

const Footer = () => {
  return (
    <footer className="p-4">
      <div className="py-4 sm:px-24">
        <img src={Logo} alt="logo" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 sm:px-24">
          <div className="py-3">
            <h1 className="font-bold mb-4">Product</h1>

            <div>
              <a href="/">Homepage</a>
            </div>
            <div>
              <a href="/">Pricing</a>
            </div>
            <div>
              <a href="/">Features</a>
            </div>
          </div>
          <div className="py-3">
            <h1 className="font-bold mb-4">Help</h1>

            <div>
              <a href="/">Live Chat</a>
            </div>
            <div>
              <a href="/">Send Email</a>
            </div>
            <div>
              <a href="/">FAQ</a>
            </div>
          </div>
          <div className="py-3">
            <h1 className="font-bold mb-4">Company</h1>

            <div>
              <a href="/">About</a>
            </div>
            <div>
              <a href="/">Customers</a>
            </div>
            <div>
              <a href="/">Blog</a>
            </div>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 sm:mt-10">
          <h1 className="font-bold mb-4">Try TweetNow</h1>
          <div className="relative">
            <input
              className="p-3 border border-blue-900 w-full h-16"
              type="text"
              placeholder="Email Address"
              id=""
            />
            <div className="absolute top-1.5 right-1">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
