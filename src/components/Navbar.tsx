import Link from "next/link";
import { TfiShoppingCartFull } from "react-icons/tfi";
import Navlinks from "./Navlinks";
import TodayDate from "./Date";

const Navbar = () => {
  return (
    <nav className="container mx-auto px-4 py-3 sm:px-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <Link href="/" aria-label="বাজার দর হোম">
            <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[13px] border bg-green-700 text-white">
              <TfiShoppingCartFull className="text-[20px]" />
            </div>
          </Link>

          <Link href="/" className="flex min-w-0 flex-col">
            <span className="text-[23px] font-bold leading-tight">
              বাজার দর
            </span>
            <span
              className="text-[13px] text-gray-500"
              suppressHydrationWarning
            >
              <TodayDate />
            </span>
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link href="/signin" className="btn font-bold hover:bg-gray-300">
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="btn rounded bg-green-700 font-bold text-white hover:bg-green-500"
          >
            সাইন আপ
          </Link>
        </div>
      </div>

      <Navlinks />
    </nav>
  );
};

export default Navbar;
