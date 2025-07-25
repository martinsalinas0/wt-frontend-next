import React from "react";
import axios from "axios";

interface MyComponentProps {
  jobName: string;
  jobID: string;
  cost: string;
  createdAt?: string;
  postedBy: string;
  location: string;
  completeBy: string;
  category: string;
  bids: string;
  onDeleteSuccess?: (id: string) => void;
}

const JobCardForList: React.FC<MyComponentProps> = ({
  jobName,
  location,
  cost,
  bids,
  createdAt,
  completeBy,
  category,
  postedBy,
  jobID,
  onDeleteSuccess,
}) => {
  const deleteClick = async () => {
    if (confirm(`are you sure you want to delete ${jobName}?`)) {
      try {
        await axios.delete(`http://localhost:8000/api/jobs/delete/${jobID}`);
        alert("Job deleted successfully");
        onDeleteSuccess?.(jobID);
      } catch (error) {
        alert(error.response?.data?.message || "Failed to delete job");
      }
    }
  };
  return (
    <div className="border-4 p-4 w-72 bg-stone-200 border-stone-200 shadow-xl rounded-2xl m-4">
      <h2 className="text-center text-2xl font-bold mb-4">{jobName}</h2>
      <div className="space-y-2 text-sm">
        <p>
          <span className="font-medium">Price:</span> {cost}
        </p>
        <p>
          <span className="font-medium">Location:</span> {location}
        </p>
        <p>
          <span className="font-medium">Created At:</span> {createdAt}
        </p>
        <p>
          <span className="font-medium">Complete By:</span> {completeBy}
        </p>
        <p>
          <span className="font-medium">Category:</span> {category}
        </p>
        <p>
          <span className="font-medium">person who posted: </span> {postedBy}
        </p>
        <p>
          <span className="font-medium">current bids </span> {bids}
        </p>

        <div className="m-2 justify-center flex">
          <button
            type="button"
            className="m-3 p-1 bg-blue-400 rounded hover:bg-blue-700 transition hover:cursor-pointer"
          >
            view
          </button>
          <button
            type="button"
            className="m-3 p-1 bg-red-400 rounded hover:bg-red-700 transition hover:cursor-pointer"
            onClick={deleteClick}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCardForList;
