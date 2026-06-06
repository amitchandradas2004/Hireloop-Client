"use client";

import { useSession } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaBuildingSolid } from "react-icons/lia";
import { MdOutlineDashboard } from "react-icons/md";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { VscLayoutSidebarLeftDock } from "react-icons/vsc";
import { motion } from "framer-motion";

export function DashboardSidebar() {
  const { data: session, isPending } = useSession();
  // console.log("Session data in sidebar:", session, "ispending:", isPending);
  const user = session?.user;

  const navItems = [
    { icon: FaHome, href: "/dashboard/recruiter", label: "Home" },
    { icon: MdOutlineDashboard, href: "/dashboard", label: "Dashboard" },
    { icon: LiaBuildingSolid, href: "/dashboard", label: "My Company" },
    {
      icon: PiHandbagSimpleBold,
      href: "/dashboard",
      label: "Manage Jobs",
    },
    { icon: Envelope, href: "/applications", label: "Applications" },
    { icon: IoSettingsOutline, href: "/settings", label: "Settings" },
  ];

  // Framer Motion variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const navContent = (
    <motion.nav
      className="flex flex-col gap-1"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        variants={itemVariants}
        className="text-xl font-bold text-left mb-2"
      >
        Welcome,
        <br /> {user?.name || "User"}
      </motion.h2>

      {navItems.map((item) => (
        <motion.div key={item.label} variants={itemVariants}>
          <Link
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
            href={item.href}
          >
            <item.icon className="size-5 text-muted" />
            {item.label}
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );

  return (
    <>
      {/* Desktop Sidebar with initial slide-in */}
      <motion.aside
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="hidden w-60 shrink-0 border-r border-default p-4 lg:block"
      >
        {navContent}
      </motion.aside>

      {/* Mobile Drawer Navigation */}
      <Drawer>
        <Button className="lg:hidden mr-2" variant="secondary">
          <VscLayoutSidebarLeftDock className="size-5 text-[#884EF4]" />
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Link href="/">
                  <Drawer.Heading className="text-2xl font-bold">
                    Hire<span className="text-[#884EF4]">Loop</span>
                  </Drawer.Heading>
                </Link>
              </Drawer.Header>
              <Drawer.Body>{navContent}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}
