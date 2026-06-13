"use client";
import { motion } from "framer-motion";
import React, { useState, useMemo, useEffect } from "react";
import JobCard from "@/components/jobs/JobCard";
import JobFilters from "@/components/jobs/JobFilters";
import { useRouter } from "next/navigation";
import { Pagination } from "@heroui/react";
import { div } from "framer-motion/client";

export default function JobListingContainer({ jobs, filters, total }) {
  console.log(jobs, "Alljobs");

  const [searchQuery, setSearchQuery] = useState(filters.search);
  const [selectedType, setSelectedType] = useState(filters.jobType || "all");
  const [selectedCategory, setSelectedCategory] = useState(
    filters.jobCategory || "all",
  );
  const [isRemoteOnly, setIsRemoteOnly] = useState(filters.isRemote || false);
  const [page, setPage] = useState(filters.page || 1);

  const router = useRouter();

  const totalItems = total;
  const itemsPerPage = 12;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const getPageNumbers = () => {
    const pages = [];
    pages.push(1);
    if (page > 3) {
      pages.push("ellipsis");
    }
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (page < totalPages - 2) {
      pages.push("ellipsis");
    }
    pages.push(totalPages);
    return pages;
  };

  const startItem = (page - 1) * itemsPerPage + 1;
  const endItem = Math.min(page * itemsPerPage, totalItems);

  useEffect(() => {
    const sp = new URLSearchParams();
    if (searchQuery) {
      sp.set("search", searchQuery);
    }
    if (selectedType !== "all") {
      sp.set("jobType", selectedType);
    }
    if (selectedCategory !== "all") {
      sp.set("jobCategory", selectedCategory);
    }
    if (isRemoteOnly) {
      sp.set("isRemote", true);
    }
    if (page) {
      sp.set("page", page);
    }
    const path = `?${sp.toString()}`;
    router.push(path);
  }, [router, selectedType, selectedCategory, isRemoteOnly, searchQuery, page]);
  // Compute matched filter rows instantly
  // const Jobs = useMemo(() => {
  //   return jobs.filter((job) => {
  //     const matchesSearch =
  //       job.jobTitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       job.companyName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //       job.requirements?.toLowerCase().includes(searchQuery.toLowerCase());

  //     const matchesType =
  //       selectedType === "all" || job.jobType === selectedType;
  //     const matchesCategory =
  //       selectedCategory === "all" || job.jobCategory === selectedCategory;
  //     const matchesRemote = !isRemoteOnly || job.isRemote === true;

  //     return matchesSearch && matchesType && matchesCategory && matchesRemote;
  //   });
  // }, [searchQuery, selectedType, selectedCategory, isRemoteOnly, jobs]);

  return (
    <>
      <JobFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isRemoteOnly={isRemoteOnly}
        setIsRemoteOnly={setIsRemoteOnly}
      />

      <div className="max-w-7xl mx-auto mb-6 text-sm text-zinc-500">
        Showing {jobs.length} position{jobs.length !== 1 && "s"}
      </div>

      {jobs.length > 0 ? (
        <>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {jobs.map((jobItem) => (
              <JobCard key={jobItem._id?.$oid || jobItem._id} job={jobItem} />
            ))}
          </div>
          <Pagination className="w-full max-w-7xl mx-auto mt-10 ">
            <Pagination.Summary>
              Showing {startItem}-{endItem} of {totalItems} results
            </Pagination.Summary>
            <Pagination.Content>
              <Pagination.Item>
                <Pagination.Previous
                  isDisabled={page === 1}
                  onPress={() => setPage((p) => p - 1)}
                >
                  <Pagination.PreviousIcon />
                  <span>Previous</span>
                </Pagination.Previous>
              </Pagination.Item>
              {getPageNumbers().map((p, i) =>
                p === "ellipsis" ? (
                  <Pagination.Item key={`ellipsis-${i}`}>
                    <Pagination.Ellipsis />
                  </Pagination.Item>
                ) : (
                  <Pagination.Item key={p}>
                    <Pagination.Link
                      isActive={p === page}
                      onPress={() => setPage(p)}
                    >
                      {p}
                    </Pagination.Link>
                  </Pagination.Item>
                ),
              )}
              <Pagination.Item>
                <Pagination.Next
                  isDisabled={page === totalPages}
                  onPress={() => setPage((p) => p + 1)}
                >
                  <span>Next</span>
                  <Pagination.NextIcon />
                </Pagination.Next>
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center py-20 px-6 border border-dashed border-zinc-800 rounded-[32px] max-w-7xl mx-auto flex flex-col items-center justify-center bg-zinc-950/30"
        >
          {/* Icon with a spring bounce */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.15,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="w-16 h-16 mb-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-zinc-500 shadow-inner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </motion.div>

          {/* Staggered Text */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-medium text-zinc-200 mb-2"
          >
            No positions found
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-zinc-500 text-base max-w-md mx-auto mb-8"
          >
            We could not find any positions matching your search criteria. Try
            adjusting your filters or exploring other categories.
          </motion.p>
        </motion.div>
      )}
    </>
  );
}
