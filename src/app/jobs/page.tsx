"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "@/components/JobCardForList";

interface Job {
  jobName: string;
  cost: string;
  createdAt?: string;
  postedBy: string;
  location: string;
  completeBy: string;
  category: string;
  _id: string;
  bids: string;
}

const JobsTestPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/jobs/all`);

        setJobs(response.data?.jobs);
      } catch (error) {
        console.error("Failed to GET from API: ", error);
      } finally {
        setLoading(false);
      }
    };
    getJobs();
  }, []);
  console.log(loading);
  const handleDeleteSuccess = (id: string) => {
    setJobs((jobs) => jobs.filter((job) => job._id !== id));
  };

  console.log(jobs);

  if (jobs.length === 0) {
    return <div className="p-4 text-gray-500">Loading jobs...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Jobs</h1>
      {jobs.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 list-none p-0">
          {jobs.map((job) => (
            <li key={job._id}>
              <JobCard
                jobName={job.jobName}
                location={job.location}
                cost={job.cost}
                bids={job.bids}
                createdAt={job.createdAt}
                completeBy="complete by date"
                category={job.category}
                postedBy={job.postedBy}
                jobID={job._id}
                onDeleteSuccess={handleDeleteSuccess}
              />
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
