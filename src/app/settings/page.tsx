import { ModeToggle } from "@/components/ui/themeToggle";
import React from "react";

const SettingsPage = () => {
  return (
    <div className="flex flex-col items-center px-4 mt-10">
      <h1 className="font-bold text-6xl mb-6">Settings Page</h1>
      <div className="text-center max-w-xl text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        praesentium non quod recusandae atque fugiat necessitatibus adipisci
        deleniti dignissimos est, consequatur accusamus quia, ullam dolore amet
        nobis quisquam ab sunt!
        <ModeToggle />
      </div>
    </div>
  );
};

export default SettingsPage;
