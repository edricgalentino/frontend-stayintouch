import Image from "next/image";
import Link from "next/link";

import { RiInstagramLine, RiTwitterXLine, RiYoutubeLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap items-center text-sm sm:text-base whitespace-nowrap bg-primary p-4 gap-y-4 text-tertiary rounded-t-xl">
        <nav className="flex flex-col w-2/6 min-w-min justify-center items-start gap-2 px-4">
          <header className="font-semibold text-secondary">Services</header>
          <Link href="/confession" className="link link-hover">
            Confession
          </Link>
          <Link href="/room-confession" className="link link-hover">
            Room Confession
          </Link>
        </nav>
        <nav className="flex flex-col w-2/6 min-w-min justify-center items-start gap-2 px-4">
          <header className="font-semibold text-secondary">Company</header>
          <Link href="/about" className="link link-hover">
            About us
          </Link>
          <Link href="/contact" className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav className="flex flex-col w-2/6 min-w-min justify-center items-start gap-2 px-4">
          <header className="font-semibold text-secondary">Legal</header>
          <Link href="/terms-of-use" className="link link-hover">
            Terms of use
          </Link>
          <Link href="/privacy-policy" className="link link-hover">
            Privacy policy
          </Link>
        </nav>
      </footer>
      <footer className="flex flex-col-reverse sm:flex-row justify-between items-center w-full p-4 gap-4 sm:gap-2 border-t">
        <aside className="flex gap-2 text-sm justify-center items-center">
          <Image src="/static/logo/Stay In Touch Head Logo.png" alt="Stay In Touch Head Logo" width={45} height={45} />
          <p>
            Stay In Touch <br />© {new Date().getFullYear()} All rights reserved.
          </p>
        </aside>
        <nav className="flex justify-end items-center gap-4">
          <Link href="https://instagram.com/stayintouch/">
            <RiInstagramLine className="text-2xl cursor-pointer" />
          </Link>
          <Link href="https://x.com/stayintouch/">
            <RiTwitterXLine className="text-2xl cursor-pointer" />
          </Link>
          <Link href="https://youtube.com/stayintouch/">
            <RiYoutubeLine className="text-2xl cursor-pointer" />
          </Link>
        </nav>
      </footer>
    </>
  );
};

export default Footer;

// <footer className="flex flex-col-reverse sm:flex-row justify-between items-center w-full p-4 gap-4 sm:gap-2">
//   <span className="text-left text-sm">
//     © {new Date().getFullYear()} <Link href="#">Stay In Touch</Link>.
//   </span>
//   <div className="flex justify-end items-center gap-4">
//     <Link href="https://instagram.com/stayintouch/">
//       <RiInstagramLine className="text-2xl cursor-pointer" />
//     </Link>
//     <Link href="https://x.com/stayintouch/">
//       <RiTwitterXLine className="text-2xl cursor-pointer" />
//     </Link>
//     <Link href="https://youtube.com/stayintouch/">
//       <RiYoutubeLine className="text-2xl cursor-pointer" />
//     </Link>
//   </div>
// </footer>
