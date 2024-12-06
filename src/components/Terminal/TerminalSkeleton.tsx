export const TerminalSkeleton = () => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-black/90 backdrop-blur-md rounded-lg border border-steel/20 overflow-hidden animate-pulse shadow-2xl shadow-black/50">
      {/* Terminal Header */}
      <div className="px-4 py-3 border-b border-steel/20 flex items-center space-x-2 bg-black/80">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-steel/30"></div>
          <div className="w-3 h-3 rounded-full bg-steel/30"></div>
          <div className="w-3 h-3 rounded-full bg-steel/30"></div>
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-8 space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-steel/30"></div>
          <div className="h-4 w-1/3 bg-steel/30 rounded"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-steel/30"></div>
          <div className="h-4 w-2/3 bg-steel/30 rounded"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded-full bg-steel/30"></div>
          <div className="h-4 w-1/2 bg-steel/30 rounded"></div>
        </div>
      </div>
    </div>
  );
}; 