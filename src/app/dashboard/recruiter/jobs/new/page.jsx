import PostJobForm from "./PostJobForm";
import { getLoogedInRecruiterCompany } from "@/lib/api/companies";
const PostJobPage = async () => {

  const company = await getLoogedInRecruiterCompany();


  return (
    <div>
      <PostJobForm company={company} />
    </div>
  );
};

export default PostJobPage;
