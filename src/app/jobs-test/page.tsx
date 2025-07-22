"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Job {
  _id: string;
  jobName: string;
  cost: number;
  postedBy: string;
  createdAt: string;
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

  const firstJob = jobs[0];
  return (
    <div>
      JobsTestPage
      <div>{firstJob.jobName}</div>
      <div>{firstJob.cost}</div>
      <div>{firstJob.postedBy}</div>
      <div>{firstJob.createdAt}</div>
      <div>{firstJob._id}</div>
    </div>
  );
};

export default JobsTestPage;
