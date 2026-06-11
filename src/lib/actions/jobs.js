"use server";

import { serverMutation } from "../core/server";

export const createJob = async (newJobData) => {
  return serverMutation("/api/jobs", newJobData);
};

// This is the original code before refactoring to use serverMutation:

// const baseurl = process.env.SERVER_URL;
// export const createJob = async (newJobData) => {
//   const res = await fetch(`${baseurl}/api/jobs`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newJobData),
//   });

//   return res.json();
// };
