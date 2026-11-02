import SectionLabel from './SectionLabel.jsx';

export default function AboutSection({ education }) {
  return <section className="border-t border-[#dfe2dc] px-[6%] py-20 sm:py-28" id="about"><div className="mx-auto max-w-[1200px]">
    <div className="mb-12"><SectionLabel number="02">A LITTLE ABOUT ME</SectionLabel></div>
    <div className="grid gap-12 md:grid-cols-[1fr_0.8fr] md:gap-20"><div><span className="font-['Playfair_Display',serif] text-4xl text-[#b56a4c]">✳</span><h2 className="mt-5 font-['Playfair_Display',serif] text-[clamp(42px,6vw,72px)] leading-[1.08]">Building with<br/>care & <em className="text-[#b56a4c]">curiosity.</em></h2></div>
      <div className="text-[15px] leading-7 text-[#536158]"><p className="font-['Playfair_Display',serif] text-[21px] leading-8 text-[#26362e]">I’m a Charlotte-based software engineer currently pursuing an M.S. in Computer Science at UNC Charlotte. I’m drawn to clean interfaces and hard problems.</p><p className="mt-5">At Comcast, I’ve helped build the tools customer service teams use every day—shipping reusable React components, improving testing, and making a legacy platform easier to use. Outside of work, I like exploring applied AI and building practical tools that make information easier to work with.</p><p className="mt-5">I care about the details: how a product reads, how it responds, and how simple it feels to use.</p>
        <div className="mt-12"><h3 className="mb-4 font-['DM_Mono',monospace] text-[11px] uppercase tracking-[0.08em] text-[#69776e]">EDUCATION</h3>{education.map(item => <div className="grid gap-2 border-t border-[#dfe2dc] py-4 sm:grid-cols-[1fr_auto] sm:gap-6" key={item.school}><div><strong className="block text-[14px] font-semibold text-[#26362e]">{item.school}</strong><span className="text-[13px]">{item.degree}</span></div><div className="flex flex-wrap justify-between gap-x-4 font-['DM_Mono',monospace] text-[11px] text-[#7c8980] sm:flex-col sm:items-end sm:text-right"><span>{item.place}</span><span>{item.detail}</span></div></div>)}</div>
      </div>
    </div>
  </div></section>;
}