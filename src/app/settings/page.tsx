import { ModeToggle } from "@/components/ui/themeToggle";
import React from "react";

const SettingsPage = () => {
  return (
    <div className="flex flex-col items-center px-4 mt-10">
      <h1 className="font-bold text-6xl mb-6">Settings</h1>
      <div className="text-center max-w-xl text-lg">
        <div className="flex items-center justify-center gap-3">
          <span>Theme:</span>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
