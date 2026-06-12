"use server";

import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";

export const createCompany = async (newCompanyData) => {
  return serverMutation("/api/companies", newCompanyData);
};

export const updateCompany = async (id, data) => {
  const result = serverMutation(`/api/companies/${id}`, data, "PATCH");
  revalidatePath("/dashboard/admin/companies");
  return result;
};

// This is the original code before refactoring to use serverMutation:

// const baseUrl = process.env.SERVER_URL;
// export const createCompany = async (newCompanyData) => {
//   const res = await fetch(`${baseUrl}/api/companies`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newCompanyData),
//   });
//   return res.json();
// };
