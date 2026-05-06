import { Link } from "@tanstack/react-router"
import { useEffect, useRef, useState } from "react"

export const Header = () => {
  const [isCompact, setIsCompact] = useState(false);

  const shouldObserver = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!shouldObserver.current) {
        window.requestAnimationFrame(() => {
          setIsCompact(window.scrollY >= 20);
          shouldObserver.current = false;
        });
        shouldObserver.current = true;
      }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute left-0 right-0 top-5 h-20 w-full">
      <header className={`fixed left-4 right-4 z-10 mx-auto flex max-w-7xl items-center justify-between gap-4 p-2 transition-all duration-300 md:left-8 md:right-8 md:p-4 ${isCompact ? 'rounded-3xl border border-[#f15a38] bg-white/90 shadow-lg shadow-orange-950/10 outline-4 outline-orange-200/50 backdrop-blur' : 'rounded-none border border-transparent bg-transparent outline-0 outline-transparent'}`}>
        <Link to="/" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full bg-[#f15a38] text-lg font-black text-white shadow-lg shadow-orange-300/40">
            F
          </span>
          <span className="text-xl font-black tracking-tight">Foodpedia</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-neutral-500 md:flex">
          <a className="text-[#181411]" href="/#special">
            Today's Special
          </a>
          <a href="/#popular">Popular</a>
        </nav>
        <button className="rounded-full bg-[#181411] px-5 py-3 text-sm font-bold text-white shadow-xl shadow-neutral-950/15">
          Subscribe
        </button>
      </header>
    </div>
  )
}
