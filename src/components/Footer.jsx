export default function Footer() {
  return <footer className="grid gap-4 border-t border-[#dfe2dc] px-[6%] py-6 font-['DM_Mono',monospace] text-[10px] uppercase tracking-[0.04em] text-[#69776e] sm:grid-cols-4 sm:items-center">
    <a className="font-['Playfair_Display',serif] text-[24px] leading-none text-[#1d2824]" href="#home">ss<span className="text-[#b56a4c]">.</span></a><span>DESIGNED & BUILT WITH CARE</span><span>© {new Date().getFullYear()} SMRUTHI SUNDAR</span><a href="#home" className="min-h-11 sm:justify-self-end">BACK TO TOP ↑</a>
  </footer>;
}