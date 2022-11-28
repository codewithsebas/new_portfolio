import { useState } from "react";
import { RiSunFill, RiMoonFill, RiMenu3Fill } from "react-icons/ri";
import {
  BiHomeAlt,
  BiFolder,
  BiGitBranch,
  BiTrophy,
  BiNavigation,
} from "react-icons/bi";

const Header = () => {
  const Nav = ["Home", "About", "Skills", "Projects", "Contact"];
  const Menu = [
    {
      id: 1,
      item: "Home",
      icon: <BiHomeAlt />,
    },
    {
      id: 2,
      item: "About",
      icon: <BiFolder />,
    },
    {
      id: 3,
      item: "Skills",
      icon: <BiGitBranch />,
    },
    {
      id: 4,
      item: "Projects",
      icon: <BiTrophy />,
    },
    {
      id: 5,
      item: "Contact",
      icon: <BiNavigation />,
    },
  ];
  const [theme, setTheme] = useState("dark");

  const handleThemeSwitch = () => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [menu, setMenu] = useState(false);

  return (
    <>
      <div id="Home"></div>
      <header className="flex justify-between px-40 py-5 sticky top-0 z-20 backdrop-blur-sm bg-white/70 dark:bg-black/10 border-b border-black/10 duration-200 dark:text-white max-lg:px-5">
        <span className="font-semibold">SG</span>
        <nav className="flex gap-10 items-center max-sm:gap-5">
          <ul className="flex gap-5 max-sm:hidden">
            {Nav.map((value, index) => (
              <li key={index}>
                <a href={`#${value}`}>{value}</a>
              </li>
            ))}
          </ul>
          <button onClick={handleThemeSwitch}>
            {theme === "dark" ? <RiSunFill /> : <RiMoonFill />}
          </button>
          <div className="hidden max-sm:flex" onClick={() => setMenu(!menu)}>
            <RiMenu3Fill />
          </div>
        </nav>
      </header>
      <div
        onClick={() => setMenu(false)}
        className={`${
          menu
            ? "bg-black/40 duration-200"
            : "duration-200 invisible z-30 overflow-hidden"
        } fixed top-0 left-0 bottom-0 right-0 z-20`}
      >
        <div
          className={`${
            menu
              ? " translate-y-0 duration-300"
              : " translate-y-48 duration-200"
          } bg-white dark:bg-neutral-900 rounded-t-lg border-t border-white/50 dark:text-white shadow-2xl right-0 left-0 bottom-0 fixed px-10 py-7 flex items-center`}
        >
          <ul className="w-full grid grid-cols-2 gap-5">
            {Menu.map((value, index) => (
              <li
                className="hover:dark:bg-black/40 rounded-md"
                key={index}
              >
                <a className="flex items-center gap-3" href={`#${value.item}`}>
                  <span className="text-lg">{value.icon}</span>
                  {value.item}
                </a>
              </li>
            ))}
            <button
              className="flex items-center gap-5"
              onClick={handleThemeSwitch}
            >
              {theme === "dark" ? <RiSunFill /> : <RiMoonFill />}
              Mode
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
