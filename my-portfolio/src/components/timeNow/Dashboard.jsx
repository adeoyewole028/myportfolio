import React from "react";
import { Button } from "./Main";
import { Icon } from "@iconify/react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 bg-cyan-100 p-4 text-lg">
      <div className="text-lg sm:px-24 sm:pr-28">
        <h4 className="text-blue-600 font-bold text-xl">Unified Dashboard</h4>

        <h1 className="text-4xl py-2 font-bold text-cyan-900">
          Customizable dashboard for all platforms.
        </h1>
        <p>
          Use Twitter and Instagram but not LinkedIn? You can customize your
          dashboard to your liking. You can even schedule the same post to
          individual platforms instead of all platforms{" "}
        </p>

        <div className="py-5 pb-16">
          <Button />
        </div>
      </div>
      <div className="sm:px-24 sm:pl-14 sm:pr-44">
        <h4 className="text-blue-600 font-bold text-xl">Enhanced Analytics</h4>
        <h1 className="text-4xl py-2 font-bold text-cyan-900">
          Real-time data that tells you everything.
        </h1>

        <p>
          Get detailed reports of what's working and what isn't. Engagement
          rates, Impressions, views, and much more data is available to you
          through our in-depth dashboard tool.
        </p>

        <div className="py-3">
          <a className="text-cyan-900 font-bold flex " href="/">
            {" "}
            <p>View more Demo</p>
            <Icon className="self-center ml-2" icon="akar-icons:arrow-right" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
