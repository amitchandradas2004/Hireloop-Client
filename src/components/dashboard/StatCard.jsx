"use client";

import { Card } from "@heroui/react";
import { motion } from "framer-motion";

export const StatCard = ({ title, value, icon: Icon, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.2 },
      }}
    >
      <Card
        className={`bg-[#18181b] border border-neutral-800 rounded-2xl p-2 overflow-hidden ${className}`}
      >
        <Card.Content className="flex flex-col gap-6 justify-between p-4">
          {/* Icon Wrapper */}
          {Icon && (
            <motion.div
              className="w-14 h-14 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center"
              whileHover={{
                rotate: 8,
                scale: 1.1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <Icon className="text-2xl text-white" />
            </motion.div>
          )}

          {/* Content */}
          <div className="flex flex-col gap-2">
            <motion.span
              className="text-sm font-medium text-neutral-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              {title}
            </motion.span>

            <motion.span
              className="text-3xl font-semibold text-white tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              {value}
            </motion.span>
          </div>
        </Card.Content>
      </Card>
    </motion.div>
  );
};
