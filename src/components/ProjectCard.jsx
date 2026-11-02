import { ArrowUpRight } from 'lucide-react';

const projectTones = {
  lavender: 'bg-[#e9e2f1] text-[#58436f]',
  peach: 'bg-[#f3dfd1] text-[#7b4c36]',
  mint: 'bg-[#dce9df] text-[#365e49]',
  blue: 'bg-[#dce8ed] text-[#385a68]',
};

export default function ProjectCard({ project }) {
  return <article className="min-w-0">
    <a className={`relative flex h-[clamp(220px,32vw,390px)] flex-col justify-between overflow-hidden p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-7 ${projectTones[project.tone] ?? 'bg-[#e7e8e2] text-[#39463e]'}`} href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>
      <span className="font-['DM_Mono',monospace] text-[10px] uppercase tracking-[0.08em]">SELECTED WORK / {project.number}</span>
      <span className="self-center font-['Playfair_Display',serif] text-[clamp(72px,12vw,150px)] leading-none opacity-80">{project.mark}</span>
      <span className="flex items-center justify-between border-t border-current/25 pt-4 font-['DM_Mono',monospace] text-[11px] uppercase tracking-[0.06em]">{project.category}<ArrowUpRight size={17}/></span>
    </a>
    <div className="pt-5">
      <div className="flex items-start justify-between gap-4">
        <div><span className="font-['DM_Mono',monospace] text-[10px] uppercase text-[#7c8980]">{project.category}</span><h3 className="mt-1 font-['Playfair_Display',serif] text-[23px] leading-tight text-[#1d2824] sm:text-[26px]">{project.title}</h3></div>
        <span className="pt-1 font-['DM_Mono',monospace] text-[11px] text-[#7c8980]">{project.year}</span>
      </div>
      <p className="mt-4 max-w-[62ch] text-[15px] leading-7 text-[#536158]">{project.description}</p>
      <ul className="mt-4 space-y-2 text-[14px] leading-6 text-[#46544c]">{project.highlights.map(item => <li className="flex gap-3" key={item}><span className="mt-[11px] size-1 shrink-0 rounded-full bg-[#b56a4c]"/>{item}</li>)}</ul>
      <div className="mt-5 flex flex-wrap items-end justify-between gap-4 border-t border-[#dfe2dc] pt-4">
        <div className="flex flex-wrap gap-2">{project.stack.map(tag => <span className="border border-[#d8ddd6] px-2.5 py-1 font-['DM_Mono',monospace] text-[10px] text-[#536158]" key={tag}>{tag}</span>)}</div>
        <a className="inline-flex min-h-10 items-center gap-2 text-[13px] text-[#26362e] hover:text-[#b56a4c]" href={project.url} target="_blank" rel="noreferrer">View project <ArrowUpRight size={15}/></a>
      </div>
    </div>
  </article>;
}