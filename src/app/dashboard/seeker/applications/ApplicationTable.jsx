"use client";
import { Table, Chip, Button } from "@heroui/react";
import { motion } from "framer-motion";
import {
  Code,
  LayoutCells,
  Database,
  Cloud,
  Cpu,
  Gear,
} from "@gravity-ui/icons";

// Utility helper to format the "Applied" relative time string
const formatRelativeTime = (dateString) => {
  const now = new Date();
  const appliedDate = new Date(dateString);
  const diffInMs = now - appliedDate;

  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  if (diffInHours < 24) {
    return diffInHours <= 1 ? "1 hour ago" : `${diffInHours} hours ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return diffInDays === 1 ? "1 day ago" : `${diffInDays} days ago`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  return diffInWeeks === 1 ? "1 week ago" : `${diffInWeeks} weeks ago`;
};

// Helper mapping to choose icons and background colors based on the job title
const getJobStyle = (title) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("frontend") || lowerTitle.includes("web")) {
    return {
      icon: <Code width="16" height="16" />,
      bg: "bg-zinc-800 text-zinc-300",
    };
  }
  if (lowerTitle.includes("designer") || lowerTitle.includes("product")) {
    return {
      icon: <LayoutCells width="16" height="16" />,
      bg: "bg-zinc-700 text-zinc-300",
    };
  }
  if (lowerTitle.includes("data") || lowerTitle.includes("scientist")) {
    return {
      icon: <Database width="16" height="16" />,
      bg: "bg-zinc-800 text-zinc-400",
    };
  }
  if (lowerTitle.includes("cloud") || lowerTitle.includes("architect")) {
    return {
      icon: <Cloud width="16" height="16" />,
      bg: "bg-rose-950/60 text-rose-500",
    };
  }
  if (lowerTitle.includes("ai") || lowerTitle.includes("research")) {
    return {
      icon: <Cpu width="16" height="16" />,
      bg: "bg-zinc-800 text-zinc-300",
    };
  }
  return {
    icon: <Gear width="16" height="16" />,
    bg: "bg-zinc-800 text-zinc-300",
  };
};

// Helper mapping for the status badges
const getStatusChip = (status = "Applied") => {
  const normalized = status.toLowerCase();
  switch (normalized) {
    case "applied":
      return (
        <Chip
          variant="bordered"
          className="border-zinc-600 text-zinc-100 text-xs font-medium px-3 py-1"
        >
          Applied
        </Chip>
      );
    case "review":
      return (
        <Chip
          variant="bordered"
          className="border-amber-600/70 text-amber-500 text-xs font-medium px-3 py-1 bg-amber-950/20"
        >
          Review
        </Chip>
      );
    case "shortlisted":
      return (
        <Chip
          variant="bordered"
          className="border-emerald-600/70 text-emerald-500 text-xs font-medium px-3 py-1 bg-emerald-950/20"
        >
          Shortlisted
        </Chip>
      );
    case "rejected":
      return (
        <Chip
          variant="bordered"
          className="border-rose-700/70 text-rose-600 text-xs font-medium px-3 py-1 bg-rose-950/20"
        >
          Rejected
        </Chip>
      );
    case "offered":
      return (
        <Chip
          variant="bordered"
          className="border-zinc-400 text-zinc-200 text-xs font-medium px-3 py-1"
        >
          Offered
        </Chip>
      );
    default:
      return (
        <Chip
          variant="bordered"
          className="border-zinc-600 text-zinc-100 text-xs font-medium"
        >
          {status}
        </Chip>
      );
  }
};

// --- Container & Header Variants ---
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const tableFrameVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

// --- NEW: Dynamic Row Animation Helper ---
// Calculates a slightly increasing delay based on the job's index in the array
const getRowAnimationProps = (index) => ({
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: {
    duration: 0.5,
    delay: 0.3 + index * 0.1, // This creates the 1-by-1 stagger effect
    ease: "easeOut",
  },
});

const ApplicationsTable = ({ jobs }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full bg-[#121212] p-6 rounded-xl border border-zinc-800/80 min-h-screen text-zinc-100"
    >
      <motion.h2
        variants={headerVariants}
        className="text-xl font-semibold mb-6 text-zinc-200"
      >
        Total Jobs Applied ({jobs.length})
      </motion.h2>

      <motion.div variants={tableFrameVariants}>
        <Table
          className="w-full"
          classNames={{
            base: "bg-transparent",
            table: "border-collapse",
            thead: "[&>tr]:border-b [&>tr]:border-zinc-800/60",
            th: "bg-transparent text-zinc-400 font-medium text-sm py-4 border-b border-zinc-800/60 first:pl-4 last:pr-4",
            tr: "border-b border-zinc-800/40 hover:bg-zinc-900/40 transition-colors last:border-none",
            td: "py-4 align-middle first:pl-4 last:pr-4 text-zinc-300 text-sm",
          }}
        >
          <Table.ScrollContainer>
            <Table.Content aria-label="Job applications tracking table">
              <Table.Header>
                <Table.Column className="w-[40%]">Job Title</Table.Column>
                <Table.Column className="w-[20%]">Company</Table.Column>
                <Table.Column className="w-[15%]">Applied</Table.Column>
                <Table.Column className="w-[15%]">Status</Table.Column>
                <Table.Column className="w-[10%] text-right">
                  Action
                </Table.Column>
              </Table.Header>

              <Table.Body emptyContent={"No applications found."}>
                {jobs.map((job, index) => {
                  const style = getJobStyle(job.jobTitle);

                  const workType = job.workType || "Full-time";
                  const locationType = job.locationType || "Remote";
                  const status = job.status || "Applied";

                  // Grab our custom stagger animation for this specific row index
                  const rowAnim = getRowAnimationProps(index);

                  return (
                    <Table.Row key={job._id?.$oid || job.jobId}>
                      {/* JOB TITLE COLUMN */}
                      <Table.Cell>
                        <motion.div
                          {...rowAnim}
                          className="flex items-center gap-4"
                        >
                          <div
                            className={`p-2.5 rounded-lg flex items-center justify-center ${style.bg}`}
                          >
                            {style.icon}
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <span className="font-medium text-zinc-100 text-[15px]">
                              {job.jobTitle}
                            </span>
                            <span className="text-xs text-zinc-500 font-normal">
                              {workType} • {locationType}
                            </span>
                          </div>
                        </motion.div>
                      </Table.Cell>

                      {/* COMPANY COLUMN */}
                      <Table.Cell>
                        <motion.div
                          {...rowAnim}
                          className="text-zinc-300 text-[14px]"
                        >
                          {job.companyName}
                        </motion.div>
                      </Table.Cell>

                      {/* APPLIED COLUMN */}
                      <Table.Cell>
                        <motion.div
                          {...rowAnim}
                          className="text-zinc-400 text-[14px]"
                        >
                          {formatRelativeTime(
                            job.createdAt?.$date || job.createdAt,
                          )}
                        </motion.div>
                      </Table.Cell>

                      {/* STATUS COLUMN */}
                      <Table.Cell>
                        <motion.div {...rowAnim}>
                          {getStatusChip(status)}
                        </motion.div>
                      </Table.Cell>

                      {/* ACTION COLUMN */}
                      <Table.Cell className="text-right">
                        <motion.div {...rowAnim} className="flex justify-end">
                          <Button
                            size="sm"
                            variant="light"
                            className="text-zinc-300 hover:text-zinc-100 font-normal text-sm"
                            onClick={() =>
                              console.log("Details for:", job.jobId)
                            }
                          >
                            Details
                          </Button>
                        </motion.div>
                      </Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </motion.div>
    </motion.div>
  );
};

export default ApplicationsTable;
