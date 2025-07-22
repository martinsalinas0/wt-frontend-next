"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const JobsTestPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/jobs/all`);

        setJobs(response.data.jobs);
      } catch (error) {
        console.error("Failed to GET from API: ", error);
      }
    };
    getJobs();
  }, []);

  console.log(jobs);

  return (
    <div>
      JobsTestPage
      <div>{jobs[0].jobName}</div>
      <div>{jobs[0].cost}</div>
      <div>{jobs[0].postedBy}</div>
      <div>{jobs[0].createdAt}</div>
      <div>{jobs[0]._id}</div>
    </div>
  );
};

export default JobsTestPage;
