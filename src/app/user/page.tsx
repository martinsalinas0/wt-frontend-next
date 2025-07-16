import Link from "next/link";
import React from "react";

const UserPage = () => {
  return (
    <div className="flex flex-col items-center px-4 mt-10">
      <h1 className="font-bold text-6xl mb-6">User Page</h1>
      <p className="font-bold uppercase 4xl text-blue-500">
        <Link href="/user/settings">user settings</Link>
      </p>
      <div className="text-center max-w-xl text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        praesentium non quod recusandae atque fugiat necessitatibus adipisci
        deleniti dignissimos est, consequatur accusamus quia, ullam dolore amet
        nobis quisquam ab sunt!
      </div>
    </div>
  );
};

export default UserPage;
