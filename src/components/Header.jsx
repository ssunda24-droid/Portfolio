import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Header({ email }) {
  const [open, setOpen] = useState(false);
  const links = [['Work', '#work'], ['About', '#about'], ['Experience', '#experience'], ['Contact', '#contact']];

  return <header className="sticky top-0 z-50 border-b border-[#dfe2dc] bg-[#f7f6f1]/95 backdrop-blur">
    <div className="relative mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-[6%] md:h-[76px]">
      <a className="font-['Playfair_Display',serif] text-[27px] leading-none text-[#1d2824]" href="#home" aria-label="Smruthi Sundar home">ss<span className="text-[#b56a4c]">.</span></a>
      <nav className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full flex-col gap-6 border-b border-[#dfe2dc] bg-[#f7f6f1] px-[6%] py-6 text-[15px] md:static md:flex md:flex-row md:items-center md:gap-9 md:border-0 md:bg-transparent md:p-0`} aria-label="Main navigation">
        {links.map(([name, href]) => <a className="text-[#46544c] transition-colors hover:text-[#b56a4c]" key={href} href={href} onClick={() => setOpen(false)}>{name}</a>)}
        <a className="inline-flex min-h-11 items-center gap-2 self-start border border-[#26362e] px-4 text-[14px] text-[#26362e] transition-colors hover:bg-[#26362e] hover:text-[#f7f6f1] md:self-auto" href={`mailto:${email}`}>Let’s talk <ArrowUpRight size={14}/></a>
      </nav>
      <button className="grid size-11 place-items-center text-[#26362e] md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
  </header>;
}