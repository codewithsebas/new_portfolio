import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-40 py-5 flex justify-between items-center w-full h-full border-t border-black/10 dark:border-white/10 duration-200 text-black/90 dark:text-white max-sm:px-6 max-sm:flex-col max-sm:gap-3">
      <h1>@{new Date().getFullYear()} | ALL RIGHTS RESERVED</h1>
      <h1>joabgiraldo@gmail.com</h1>
      <div className="flex justify-center gap-6 text-xl">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/codewithsebas/ "
        >
          <FaInstagram />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/codewithsebas"
        >
          <FaTwitter />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/sebasti%C3%A1n-giraldo-124292227/"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
