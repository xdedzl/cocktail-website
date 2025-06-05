export default function LoadingSpinner() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-amber-600 border-r-amber-500 border-b-amber-400 border-l-amber-300"></div>
          <p className="mt-4 text-amber-700 font-medium animate-pulse">调酒师正在准备...</p>
        </div>
      </div>
    );
  }