import SectionLabel from './SectionLabel.jsx';

export default function SkillsSection({ skills }) {
  return <section className="border-t border-[#dfe2dc] px-[6%] py-20 sm:py-28"><div className="mx-auto max-w-[1200px]">
    <div className="grid gap-8 md:grid-cols-[1fr_2fr]"><SectionLabel number="04">MY TOOLKIT</SectionLabel><h2 className="font-['Playfair_Display',serif] text-[36px] leading-tight sm:text-[46px]">Tools of the trade<span className="text-[#b56a4c]">.</span></h2></div>
    <div className="mt-12 grid border-t border-[#dfe2dc] sm:grid-cols-2">{skills.map(group => <div className="border-b border-[#dfe2dc] py-6 sm:px-5 sm:first:pl-0 sm:nth-[2n+1]:border-r sm:nth-[2n+1]:pr-8" key={group.label}><h3 className="mb-4 font-['DM_Mono',monospace] text-[11px] uppercase tracking-[0.06em] text-[#69776e]">{group.label}</h3><div className="flex flex-wrap gap-2">{group.items.map(skill => <span className="border border-[#d8ddd6] px-3 py-2 text-[13px] text-[#46544c]" key={skill}>{skill}</span>)}</div></div>)}</div>
  </div></section>;
}