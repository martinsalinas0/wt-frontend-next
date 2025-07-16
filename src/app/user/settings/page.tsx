import React from "react";

const UserSetting = () => {
  return (
    <div>
      UserSettings
      <div className="border-2 border-stone-800 shadow-xl max-w-max justify-center m-7 p-4">
        <h1>John Doe</h1>
        <p>Email</p>
        <p>phone number</p>
        <p>Role: contractor / sub contractor</p>
        <p>rating</p>
        <p>jobs completed</p>
      </div>
      <div>
        <button className="button  bg-blue-400 rounded m-3 p-1">
          Edit Acount Settings
        </button>
      </div>
    </div>
  );
};

export default UserSetting;
