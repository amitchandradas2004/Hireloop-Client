import { redirect } from "next/navigation";
import { getUserToken } from "./session";

const baseUrl = process.env.SERVER_URL;

export const authHeader = async () => {
  const token = await getUserToken();

  const header = {
    authorization: `Bearer ${token}`,
  };
  return token ? header : {};
};

export const serverFetch = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);
  return handleStatusCode(res);
};

export const protectedFetch = async (path) => {
  const res = await fetch(`${baseUrl}${path}`, {
    headers: await authHeader(),
  });
  return handleStatusCode(res);
};

export const serverMutation = async (path, data, method = "POST") => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      ...(await authHeader()),
    },

    body: JSON.stringify(data),
  });

  return handleStatusCode(res);
};

const handleStatusCode = (res) => {
  if (res.status === 401) {
    redirect("/unauthorized");
  } else if (res.status === 403) {
    redirect("/forbidden");
  }
  return res.json();
};
