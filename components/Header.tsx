import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import GithubIcon from "./github-icon";

export default function Header() {
  return (
    <header className="relative mx-auto mt-5 flex w-full items-center justify-center px-2 pb-7 sm:px-4">
      <Link href="/" className="absolute flex items-center gap-2">
        <Image alt="header text" src={logo} className="h-6 w-6" />
        <h1 className="text-xl tracking-tight">
          <span className="text-green-600">apps.</span>JesseJesse.com
        </h1>
      </Link>
      <a
        href="https://github.com/sudo-self/insta-appz"
        target="_blank"
        className="ml-auto hidden items-center gap-3 rounded-2xl bg-white dark:bg-[#1E293B] dark:text-gray-100 px-6 py-2 sm:flex border border-green-200 dark:border-green-700"
      >
        <GithubIcon className="h-4 w-4 dark:text-green-400" />
        <span>sudo-self</span>
      </a>
    </header>
  );
}
