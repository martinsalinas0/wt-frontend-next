import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-stone-50">
      <div className="border-2 rounded-xl max-w-sm w-full m-3 p-5 shadow-xl bg-stone-100">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form className="flex flex-col space-y-4">
          <label className="flex flex-col text-sm font-medium text-gray-700">
            First Name
            <input
              type="text"
              placeholder="Enter your first name"
              className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stone-500"
            />
          </label>
          <label className="flex flex-col text-sm font-medium text-gray-700">
            Last Name
            <input
              type="text"
              placeholder="Enter your last name"
              className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stone-500"
            />
          </label>

          <label className="flex flex-col text-sm font-medium text-gray-700">
            Username
            <input
              type="text"
              placeholder="Enter your username"
              className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stone-500"
            />
          </label>
          <label className="flex flex-col text-sm font-medium text-gray-700">
            Password
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stone-500"
            />
          </label>
          <label className="flex flex-col text-sm font-medium text-gray-700">
            Phone Number
            <input
              placeholder="Enter your username"
              className="mt-1 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-stone-500"
            />
          </label>
          <div className="flex flex-col gap-6">
            {/* Terms and Conditions */}
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2">
                <Checkbox id="terms" />
                <div>
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                  <p className="text-muted-foreground text-sm">
                    By clicking this checkbox, you agree to the terms and
                    conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="flex flex-col gap-2">
              <div className="flex items-start gap-2">
                <Checkbox id="notifications" defaultChecked />
                <div>
                  <Label htmlFor="notifications">Enable Notifications</Label>
                  <p className="text-muted-foreground text-sm">
                    You can enable or disable notifications at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-green-400 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
