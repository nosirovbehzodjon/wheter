export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
        <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
      </div>
    </div>
  );
}
