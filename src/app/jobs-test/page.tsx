"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Job {
  jobName: string;
  cost: number;
  createdAt?: string;
  postedBy: string;
  location: string;
  completeBy: string;
  category: string;
  _id: string;
  bids: number;
}

const JobsTestPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/jobs/all`);

        setJobs(response.data?.jobs);
      } catch (error) {
        console.error("Failed to GET from API: ", error);
      }
    };
    getJobs();
  }, []);

  console.log(jobs);

  if (jobs.length === 0) {
    return <div className="p-4 text-gray-500">Loading jobs...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Jobs Test Page</h1>
      {jobs.length > 0 ? (
        <ul className="space-y-2">
          {jobs.map((job) => (
            <li key={job._id} className="p-2 bg-gray-100 rounded shadow">
              {job.jobName} - ${job.cost} - {job.createdAt} - {job._id} -{" "}
              {job.location} - {job.postedBy}
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs found.</p>
      )}
    </div>
  );
};

export default JobsTestPage;
