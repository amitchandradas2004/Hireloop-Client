import { StatCard } from "./StatCard";

export const DashboardStats = ({ statsData = [] }) => {
  return (
    <div className="w-full container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statsData.map((stat, index) => (
          <StatCard
            key={stat.id || index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>
    </div>
  );
};
