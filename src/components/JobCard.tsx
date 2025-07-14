import React from "react";

const JobCard = () => {
  return (
    <div className="border-4 p-4 w-72 bg-stone-200 border-stone-200 shadow-xl rounded-2xl m-4">
      <h2 className="text-center text-2xl font-bold mb-4">Job Name</h2>
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-medium">Price:</span> $250
        </p>
        <p>
          <span className="font-medium">Location:</span> Austin, TX
        </p>
        <p>
          <span className="font-medium">Created At:</span> 2025-07-10
        </p>
        <p>
          <span className="font-medium">Complete By:</span> 2025-07-20
        </p>
        <p>
          <span className="font-medium">Category:</span> Electrical
        </p>
        <p>
          <span className="font-medium">Posted By:</span> Contractor
        </p>
      </div>
    </div>
  );
};

export default JobCard;
