import { ArrowDown } from 'lucide-react';

export default function HeroSection({ profile }) {
  return <section className="relative mx-auto flex min-h-[calc(100svh-68px)] max-w-[1440px] flex-col justify-between px-[6%] pb-6 pt-6 md:min-h-[calc(100svh-76px)] md:pb-8 md:pt-8" id="home">
    <div className="flex items-start justify-between gap-4 font-['DM_Mono',monospace] text-[10px] uppercase tracking-[0.06em] text-[#69776e] sm:text-[11px]">
      <span className="inline-flex items-center gap-2"><i className="size-2 rounded-full bg-[#779875]"/> OPEN TO WHAT’S NEXT</span><span className="text-right">BASED IN {profile.location.toUpperCase()}</span>
    </div>
    <div className="my-16 max-w-[1000px] py-8 md:my-20">
      <p className="mb-5 font-['DM_Mono',monospace] text-[10px] uppercase tracking-[0.1em] text-[#69776e] sm:text-[11px]">HELLO, I’M SMRUTHI</p>
      <h1 className="font-['Playfair_Display',serif] text-[clamp(52px,8vw,112px)] leading-[1.04] text-[#1d2824]">Thoughtful code.<br/><em className="font-medium text-[#b56a4c]">Human</em> experiences.</h1>
      <div className="mt-8 flex max-w-[650px] items-end justify-between gap-8 sm:mt-10">
        <p className="max-w-[530px] text-[16px] leading-7 text-[#536158] sm:text-[17px]">{profile.intro}</p>
        <a className="grid size-12 shrink-0 place-items-center rounded-full border border-[#aeb7af] text-[#26362e] transition-colors hover:bg-[#26362e] hover:text-white" href="#work" aria-label="Explore selected work"><ArrowDown size={19}/></a>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3 border-t border-[#dfe2dc] pt-4 font-['DM_Mono',monospace] text-[9px] uppercase tracking-[0.05em] text-[#69776e] sm:grid-cols-3 sm:text-[10px]">
      <span>SOFTWARE ENGINEER</span><span className="text-right sm:text-center">FRONTEND · AI · PRODUCT</span><span className="col-span-2 sm:col-span-1 sm:text-right">35°13′ N&nbsp; 80°50′ W</span>
    </div>
  </section>;
}