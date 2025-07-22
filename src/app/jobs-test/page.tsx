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

  return <div>JobsTestPage</div>;
};

export default JobsTestPage;
