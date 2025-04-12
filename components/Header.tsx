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
    </header>
  );
}
