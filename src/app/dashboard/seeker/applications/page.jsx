import { getApplicationsByApplicant } from "@/lib/api/applications";
import { getUserSession } from "@/lib/core/session";

import ApplicationsTable from "./ApplicationTable";

const SeekerApplicationsPage = async () => {
  const user = await getUserSession();
  const jobs = await getApplicationsByApplicant(user?.id);

  return (
    <div>
      <ApplicationsTable jobs={jobs} />
    </div>
  );
};

export default SeekerApplicationsPage;
