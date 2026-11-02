import ProjectCard from './ProjectCard.jsx';
import SectionLabel from './SectionLabel.jsx';

export default function WorkSection({ projects }) {
  return <section className="border-t border-[#dfe2dc] px-[6%] py-20 sm:py-28" id="work"><div className="mx-auto max-w-[1200px]">
    <div className="grid gap-8 md:grid-cols-[1fr_2fr_auto] md:items-end"><SectionLabel number="01">THE WORK</SectionLabel><div><h2 className="font-['Playfair_Display',serif] text-[42px] leading-tight sm:text-[50px]">Selected work<span className="text-[#b56a4c]">.</span></h2><p className="mt-3 text-[15px] text-[#63716a]">A few things I’ve built, explored, and learned along the way.</p></div><span className="font-['DM_Mono',monospace] text-[10px] uppercase text-[#7c8980] md:pb-1">({String(projects.length).padStart(2, '0')} PROJECTS)</span></div>
    <div className="mt-12 grid gap-x-8 gap-y-14 md:mt-16 md:grid-cols-2 md:gap-y-20">{projects.map(project => <ProjectCard project={project} key={project.number}/>)}</div>
  </div></section>;
}