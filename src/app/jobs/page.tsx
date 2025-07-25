import JobCard from "@/components/JobCardForList";
import React from "react";

const JobsPage = () => {
  return (
    <div className="flex flex-col items-center px-4 mt-10">
      <h1 className="font-bold text-6xl mb-6">Jobs Page</h1>
      <div className="text-center max-w-xl text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        praesentium non quod recusandae atque fugiat necessitatibus adipisci
        deleniti dignissimos est, consequatur accusamus quia, ullam dolore amet
        nobis quisquam ab sunt!
      </div>
      <div className="mt-2  mb-4 p-3 flex">
        <form action="submit">
          <input type="text" placeholder="search" className="border rounded" />{" "}
          <button className="bg-blue-400 rounded p-0.5">Search</button>
        </form>
        <p className="m-2"> hi</p>
      </div>
      <div className="m-8 flex flex-wrap justify-center gap-6">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

export default JobsPage;
