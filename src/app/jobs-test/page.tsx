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

  const handleDeleteSuccess = (id: string) => {
    setJobs((jobs) => jobs.filter((job) => job._id !== id));
  };

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
              ></JobCard>
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
