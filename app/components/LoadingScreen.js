import { Loader2 } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center gap-4">
      <Loader2 className="animate-spin text-blue-600" size={48} />
      <p className="font-bold text-slate-400 uppercase tracking-widest text-xs">Connecting...</p>
    </div>
  );
}
