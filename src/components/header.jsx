import { Link } from "@tanstack/react-router"
import { useEffect, useRef, useState } from "react"

export const Header = () => {
  const [isCompact, setIsCompact] = useState(false);

  let shouldObserver = useRef(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!shouldObserver.current) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 100) {
            setIsCompact(true);
          } else {
            setIsCompact(false);
          }
          shouldObserver.current = false;
        });
        shouldObserver.current = true;
      }
    });
  }, []);

  return (
    <div className="w-full absolute left-0 right-0 top-0 h-20 ">
      <header className={"w-full max-w-7xl m-auto flex items-center justify-between gap-4 fixed z-10 p-2 md:p-4"}>
        <Link to="/" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full bg-[#f15a38] text-lg font-black text-white shadow-lg shadow-orange-300/40">
            F
          </span>
          <span className="text-xl font-black tracking-tight">Foodpedia</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-neutral-500 md:flex">
          <a className="text-[#181411]" href="#menu">
            Menu
          </a>
          <a href="#popular">Popular</a>
          <a href="#fresh">Fresh picks</a>
        </nav>
        <button className="rounded-full bg-[#181411] px-5 py-3 text-sm font-bold text-white shadow-xl shadow-neutral-950/15">
          Order now
        </button>
      </header>
    </div>
  )
}