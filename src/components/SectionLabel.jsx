export default function SectionLabel({ number, children }) {
  return <div className="flex items-center gap-3 font-['DM_Mono',monospace] text-[11px] uppercase tracking-[0.08em] text-[#63716a]">
    <span>{number}</span><span className="h-px w-9 bg-[#aeb7af]"/><span>{children}</span>
  </div>;
}