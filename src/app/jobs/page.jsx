import JobCard from "@/components/jobs/JobCard";
import { getJobs } from "@/lib/api/jobs";
// import JobListingContainer from "@/components/jobs/JobListingContainer";

export default async function AllJobs() {
  // Fetched server-side on the initial request
  const jobs = await getJobs();
  // console.log(jobs, "All jobs");

  return (
    <div className="w-full min-h-screen bg-zinc-950 p-6 md:p-12 text-white">
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-bold tracking-tight">Open Positions</h1>
        <p className="text-zinc-400 mt-2">
          Discover your next engineering challenge.
        </p>
        {jobs.length}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {jobs && jobs.map((job) => <JobCard key={job._id} job={job} />)}

        {/* Pass data to the Client Wrapper to handle filtering interactivity */}
        {/* <JobListingContainer initialJobs={jobs || []} /> */}
      </div>
    </div>
  );
}
