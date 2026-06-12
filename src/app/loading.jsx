// app/loading.jsx
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-slate-950">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#8E51FF]"></div>
        <div className="rounded-full h-16 w-16 border-4 border-gray-200 dark:border-slate-900"></div>
      </div>
    </div>
  );
}
