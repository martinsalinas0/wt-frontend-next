import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="bg-stone-900 text-3xl">
      <nav className="min-w-auto bg-darkblue shadow-2xl px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <p className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              <Link href="/">HOME</Link>
            </p>
            <p className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              <Link href="/jobs">Jobs</Link>
            </p>
            <p className="text-orange-400 hover:text-orange-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              <Link href="/settings">Settings</Link>
            </p>
          </div>
          <div className="text-orange-500 font-bold px-3 py-2">
            <Link href="/user">User</Link>{" "}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
