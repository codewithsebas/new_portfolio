import { BsMouse } from "react-icons/bs";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { TbMessage2Share } from "react-icons/tb";

function Home() {
  return (
    <section
      className="h-screen px-40 py-5 duration-200 relative dark:text-white dark:border-white/50 max-sm:px-6"
    >
      <img
      className="top-0 left-0 right-0 absolute bg-contain opacity-5 hidden max-sm:flex"
        src="https://res.cloudinary.com/dovavvnjx/image/upload/v1669539609/fondo_yhuwyh.webp"
        alt="4K"
      />
      <div className="mt-10 w-full h-96 flex flex-wrap justify-between max-sm:mt-5">
        <div className="h-full flex flex-col justify-center gap-6 text-xl max-sm:hidden">
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
        <div className="w-min flex flex-col items-start gap-5 max-sm:w-full">
          <h1 className="w-full text-6xl font-semibold tracking-wider max-sm:text-5xl">
            Sebastián Giraldo
          </h1>
          <div className="w-full flex justify-between items-center gap-5">
            <div className="bg-black dark:bg-white w-2/4 h-px"></div>
            <h1 className="text-2xl">
              UI/UX Designer & FullStack Developer ⚡
            </h1>
          </div>
          <p className="text-base">
            Hi, i´m Sebastián and i’m a UI/UX Designer and I present you my
            personal portfolio, i hope you like it!
          </p>
          <div className="h-full gap-6 text-xl flex sm:hidden">
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
          <a
            href="https://wa.link/lo9tgs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border py-3 px-5 rounded-lg duration-200 text-white bg-black dark:bg-white dark:text-black"
          >
            <span>Contact me </span>
            <TbMessage2Share />
          </a>
        </div>
        <div className="w-80 bg-contain hidden lg:flex flex-col justify-center">
          <img
            className="w-72 shadow-2xl border-2 rounded-lg z-10 animate"
            src="https://res.cloudinary.com/dovavvnjx/image/upload/v1669441972/me2_jgtp6h.jpg"
            alt="Me"
          />
        </div>
      </div>
      <div className="mt-16 flex justify-center max-sm:mt-24">
        <div className="flex flex-col items-center gap-3 animate-bounce">
          <span className="font-light text-xl">Scroll</span>
          <BsMouse className="text-xl" />
        </div>
      </div>
    </section>
  );
}

export default Home;
