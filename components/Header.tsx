import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/blog-logo.png";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <header className="fixed top-0 z-50 left-0 border-b border-gray-600 w-full bg-[#131313] ">
        <nav className="max-w-5xl m-auto p-3  ">
          <div className="flex justify-between items-center">
            <div className="">
              <Link href={"/"}>
                <div className="font-bold flex  items-center">
                  <Image src={logo} width={40} height={10} alt="" />
                  Seungjae's DEV
                </div>
              </Link>
            </div>
            <div className="gap-5 flex items-center">
              <Link href={"/"} className="font-bold text-[18px]">
                홈
              </Link>
              <Link
                href={"https://github.com/seungjae0619"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
