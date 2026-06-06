import { Spinner } from "@heroui/react";

export function Loading() {
  return (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" className="text-[#7008E7]" />
      </div>
    </div>
  );
}
