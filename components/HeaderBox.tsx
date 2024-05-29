import React from "react";

const HeaderBox = ({ type, title, user, subtext }: HeaderBoxProp) => {
  return (
    <div className="header-box bg-white rounded-lg px-5 py-2 border-t-4 border- border-emerald-900 border-opacity-5">
      <h1 className="header-box-title">
        {title},{" "}
        {type === "greeting" && (
          <span className="text-bankGradient">{user}</span>
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
};

export default HeaderBox;
