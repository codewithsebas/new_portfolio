import { BiDownload } from "react-icons/bi";
import CV from "../download/CV.pdf";

const About = () => {
  return (
    <section
      className="w-full h-full relative px-40 py-5 pt-24 flex flex-col gap-5 duration-200 dark:text-white max-sm:px-6 max-sm:pt-20"
      id="About"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-7xl max-sm:text-5xl">About</h1>
        <p className="text-2xl max-sm:text-lg">
          Here is a little bit about me!
        </p>
      </div>
      <div className="flex justify-between relative max-sm:flex-col max-sm:gap-5">
        <div className="w-full bg-contain absolute -z-10 opacity-5 dark:opacity-25 max-sm:-top-36">
          <img
            className="w-auto dropShadow border-2"
            src="https://res.cloudinary.com/dovavvnjx/image/upload/v1669457818/ui-ux-design_1_znsqm9.png"
            alt="Me"
          />
        </div>
        <div className="w-2/5 bg-contain flex flex-col max-sm:w-full">
          <img
            className="w-80 shadow-2xl border-2 rounded-lg"
            src="https://res.cloudinary.com/dovavvnjx/image/upload/v1669441972/me2_jgtp6h.jpg"
            alt="Me"
          />
        </div>
        <div className="w-2/4 flex flex-col gap-3 max-sm:w-full">
          <h1 className="text-6xl max-sm:text-3xl">My History</h1>
          <div className="text-lg max-sm:text-base">
            Hello everyone, here is a little summary about me! <br />
            <div className="bg-black/50 dark:bg-white/50 duration-200 w-full h-0.5 my-3"></div>
            I was born on November 21, 2001 in Colombia. I am passionate about
            programming since I was a little boy. I started programming in 2019
            after finishing high school. From then until today I have touched
            many different technologies and languages.
            <br />
            <br />
            My deep knowledge is in MySQL, MongoDB, PHP, NodeJS, JavaScript,
            HTML, CSS, ReactJS, NextJS, UI/UX Designer.
            <br />
            <br />I hope you find it nice to read a little about me and my
            experience as a Software Developer.
          </div>
          <h1 className="text-4xl max-sm:text-3xl">Formation</h1>
          <div className="bg-black/50 dark:bg-white/50 duration-200 w-full h-0.5 my-1"></div>
          <p className="text-lg  max-sm:text-base">
            SENA - Udemy - Platzi - EDTeam
          </p>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            download="CV_Sebastian_Giraldo.pdf"
            className="flex items-center gap-3 border py-3 px-5 rounded-lg duration-200 text-white bg-black dark:bg-white dark:text-black"
          >
            <span className="w-full">Download CV </span>
            <BiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
