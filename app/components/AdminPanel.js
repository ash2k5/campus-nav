import { Users, MousePointer2, Plus, Loader2, Trash2 } from 'lucide-react';

export default function AdminPanel({
  isDrawing, selectedPathId, isDeleting, showOsmPaths,
  onDelete, onCancelSelect, onToggleOsmPaths, onStartDrawing,
}) {
  return (
    <div className="absolute bottom-10 left-6 z-30 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 w-80 space-y-3">
      <h3 className="font-bold text-slate-800 flex items-center gap-2">
        <Users size={18} className="text-blue-500" /> Collaborative Editor
      </h3>

      {selectedPathId ? (
        <>
          <div className="bg-red-50 border border-red-100 p-3 rounded-xl text-[11px] text-red-700 font-bold">
            Path selected — highlighted in red on the map
          </div>
          <button
            onClick={onDelete}
            disabled={isDeleting}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-slate-100 disabled:text-slate-400 text-white font-bold py-3 rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
          >
            {isDeleting
              ? <><Loader2 size={16} className="animate-spin" /> Deleting...</>
              : <><Trash2 size={16} /> Delete This Path</>
            }
          </button>
          <button
            onClick={onCancelSelect}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-2.5 rounded-2xl text-sm transition-all"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          {isDrawing ? (
            <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl text-[11px] text-blue-700 font-bold flex gap-2">
              <MousePointer2 size={14} className="shrink-0 mt-0.5" />
              Click to place points. Double-click to finish — path saves automatically.
            </div>
          ) : (
            <>
              <p className="text-xs text-slate-400">
                Draw new paths, or click an existing green path to select and delete it.
              </p>
              <button
                onClick={onToggleOsmPaths}
                className={`w-full py-2 rounded-2xl text-xs font-bold transition-all ${showOsmPaths ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
              >
                {showOsmPaths ? 'Hide OSM Paths' : 'Show OSM Paths'}
              </button>
            </>
          )}
          <button
            onClick={onStartDrawing}
            disabled={isDrawing}
            className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-slate-100 disabled:text-slate-400 text-white font-bold py-3 rounded-2xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
          >
            <Plus size={18} /> {isDrawing ? 'Drawing...' : 'Start New Path'}
          </button>
        </>
      )}
    </div>
  );
}
