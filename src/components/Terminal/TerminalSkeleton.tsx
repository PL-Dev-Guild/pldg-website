export const TerminalSkeleton = () => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-black/40 backdrop-blur-sm rounded-lg border border-steel/10 overflow-hidden animate-pulse">
      {/* Terminal Header */}
      <div className="px-4 py-3 border-b border-steel/10 flex items-center space-x-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-steel/20"></div>
          <div className="w-3 h-3 rounded-full bg-steel/20"></div>
          <div className="w-3 h-3 rounded-full bg-steel/20"></div>
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-steel/20"></div>
          <div className="h-4 w-1/3 bg-steel/20 rounded"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-steel/20"></div>
          <div className="h-4 w-2/3 bg-steel/20 rounded"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-steel/20"></div>
          <div className="h-4 w-1/2 bg-steel/20 rounded"></div>
        </div>
      </div>
    </div>
  );
}; 