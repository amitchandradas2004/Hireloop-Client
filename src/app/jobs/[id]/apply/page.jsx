import { getJobById } from "@/lib/api/jobs";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import JobApply from "./JobApply";

const ApplyPage = async ({ params }) => {
  const { id } = await params;

  const user = await getUserSession();
  // console.log(user, "User data in apply page");
  if (!user) {
    redirect(`/SignInPage?redirect=/jobs/${id}apply`);
  }

  if (user.role !== "seeker") {
    return (
      <div className="w-full min-h-screen bg-zinc-900 flex flex-col justify-center items-center text-white p-6">
        <p className="text-zinc-300 text-2xl text-center">
          Only job seeker can apply for this positions. <br /> Please sign in
          with a seeker account to proceed
        </p>
      </div>
    );
  }

  const job = await getJobById(id);
  console.log(job, "Job details");
  return (
    <div className="mt-30">
      <h2>Apply for {job.jobTitle} </h2>
      <JobApply job={job} applicant={user} />
    </div>
  );
};

export default ApplyPage;
