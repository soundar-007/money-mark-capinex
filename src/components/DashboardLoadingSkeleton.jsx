// components/DashboardLoadingSkeleton.js
export default function DashboardLoadingSkeleton() {
  return (
    <div className="flex min-h-screen w-full overflow-auto animate-pulse">
      {/* Sidebar Skeleton */}
      <div className="hidden lg:flex flex-col w-64 bg-primary p-4 space-y-4">
        <div className="h-12 bg-gray-700 rounded"></div> {/* Logo */}
        <div className="space-y-2 mt-6">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-6 bg-gray-600 rounded"></div>
          ))}
        </div>
      </div>

      {/* Main content skeleton */}
      <main className="flex-1 flex flex-col ml-0 lg:ml-64 w-full">
        {/* Header skeleton */}
        <div className="h-16 bg-gray-300 w-full border-b border-gray-400 flex items-center px-4">
          <div className="h-8 w-32 bg-gray-400 rounded"></div> {/* Could represent breadcrumb or title */}
          <div className="ml-auto flex space-x-4">
            <div className="h-8 w-16 bg-gray-400 rounded"></div>
            <div className="h-8 w-8 rounded-full bg-gray-400"></div>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 p-4 space-y-6 bg-gray-100">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="h-48 bg-gray-300 rounded"></div>
          ))}
        </div>

        {/* Footer skeleton */}
        <footer className="h-12 bg-gray-300 w-full border-t border-gray-400 flex items-center justify-center text-gray-600 text-sm">
          Loading footer...
        </footer>
      </main>
    </div>
  );
}
