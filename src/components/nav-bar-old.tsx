import Link from "next/link";
import { FiBook } from "react-icons/fi";
import { FaChartColumn } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import Image from "next/image";
import { getServerAuthSession } from "@/server/auth";
import NavBarAuthButton from "./nav-bar-auth-button";
import NavBarLinks from "./nav-bar-links";

const NavBar = async () => {
  const session = await getServerAuthSession();
  return (
    <nav className="flex items-center justify-between p-4 px-6">
      <Link
        href="/"
        className="flex select-none items-center justify-between gap-4 text-xl font-semibold"
      >
        <Image
          src="/mlsa-logo.png"
          width={40}
          height={40}
          alt="MLSA Logo"
          priority={true}
          quality={100}
        />
        <span className="hidden md:inline">Kryptic Hunt</span>
      </Link>
      <ul className="hidden text-gray-300 md:flex md:items-center md:justify-between md:gap-6">
        <Link href="/rules">
          <li className="flex items-center justify-center gap-2 hover:text-gray-100 hover:underline">
            <FiBook />
            Rules
          </li>
        </Link>
        <Link href="/leaderboard">
          <li className="flex items-center justify-center gap-2 hover:text-gray-100 hover:underline">
            <FaChartColumn />
            Leaderboard
          </li>
        </Link>
        <Link href="/about">
          <li className="flex items-center justify-center gap-2 hover:text-gray-100 hover:underline">
            <FaRegQuestionCircle />
            About
          </li>
        </Link>
        <li></li>
      </ul>
      <div className=" flex items-center justify-center gap-4">
        <NavBarAuthButton
          isAuthenticated={session ? true : false}
          name={session?.user?.name}
        />
        <div className="inline md:hidden">
          <NavBarLinks />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;