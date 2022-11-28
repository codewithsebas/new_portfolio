const Skills = () => {
  const skills = [
    {
      id: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      title: "React JS",
      titleDescription: "One year experience",
      description:
        "My React Experience My React Experience My React Experience",
      link: "https://es.reactjs.org/",
      button: "Page Official",
      border: "border border-cyan-300/50",
      borderB: "border-b border-cyan-300/50",
      borderButton: "border border-cyan-300/50",
    },
    {
      id: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
      title: "Node JS",
      titleDescription: "One year experience",
      description:
        "My React Experience My React Experience My React Experience",
      link: "https://nodejs.org/es/",
      button: "Page Official",
      border: "border border-lime-300/50",
      borderB: "border-b border-lime-300/50",
      borderButton: "border border-lime-300/50",
    },
    {
      id: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png",
      title: "MongoDB",
      titleDescription: "One year experience",
      description:
        "My React Experience My React Experience My React Experience",
      link: "https://www.mongodb.com/",
      button: "Page Official",
      border: "border border-lime-300/50",
      borderB: "border-b border-lime-300/50",
      borderButton: "border border-lime-300/50",
    },
    {
      id: 4,
      image: "https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png",
      title: "HTML 5",
      titleDescription: "One year experience",
      description:
        "My React Experience My React Experience My React Experience",
      link: "https://developer.mozilla.org/es/docs/Web/HTML",
      button: "Page Official",
      border: "border border-orange-300/50",
      borderB: "border-b border-orange-300/50",
      borderButton: "border border-orange-300/50",
    },
    {
      id: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
      title: "CSS 3",
      titleDescription: "One year experience",
      description:
        "My React Experience My React Experience My React Experience",
      link: "https://developer.mozilla.org/es/docs/Web/CSS",
      button: "Page Official",
      border: "border border-cyan-300/50",
      borderB: "border-b border-cyan-300/50",
      borderButton: "border border-cyan-300/50",
    },
    {
      id: 6,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      title: "JavaScript",
      titleDescription: "One year experience",
      description:
        "My React Experience My React Experience My React Experience",
      link: "https://developer.mozilla.org/es/docs/Web/JavaScript",
      button: "Page Official",
      border: "border border-yellow-300/50",
      borderB: "border-b border-yellow-300/50",
      borderButton: "border border-yellow-300/50",
    },
    {
      id: 7,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png",
      title: "Figma",
      titleDescription: "One year experience",
      description:
        "My React Experience My React Experience My React Experience",
      link: "https://www.figma.com/design/",
      button: "Page Official",
      border: "border border-red-300/50",
      borderB: "border-b border-red-300/50",
      borderButton: "border border-red-300/50",
    },
    {
      id: 8,
      image:
        "https://res.cloudinary.com/dovavvnjx/image/upload/v1669457818/ui-ux-design_1_znsqm9.png",
      title: "UI/UX Designer",
      titleDescription: "One year experience",
      description:
        "My React Experience My React Experience My React Experience",
      link: "https://www.neoland.es/que-es-el-ux-ui-design/",
      button: "Page Official",
      border: "border border-black/50",
      borderB: "border-b border-black/50",
      borderButton: "border border-black/50",
    },
  ];
  return (
    <section
      className="w-full h-full px-40 py-5 pt-20 flex flex-col gap-5 duration-200 dark:text-white max-sm:px-6"
      id="Skills"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-7xl max-sm:text-5xl">Skills</h1>
        <p className="text-2xl max-sm:text-lg">A brief description of my projects!</p>
      </div>
      <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
        {skills.map((value, index) => (
          <div
            key={index}
            className={`shadow-xl w-full border border-cyan-300/50 rounded-md ${value.border}`}
          >
            <div className="w-full">
              <div className="px-2">
                <img
                  className="object-contain object-center w-full h-60"
                  src={value.image}
                  alt="React Logo"
                />
              </div>
              <h1
                className={`pt-3 pb-3 px-5 font-extrabold text-2xl ${value.borderB}`}
              >
                {value.title}
              </h1>
            </div>
            <div className="px-5 pb-3 pt-3 flex flex-col items-start gap-3">
              <h1 className="font-bold text-lg">{value.titleDescription}</h1>
              <p className="text-sm">{value.description}</p>
              <a
                href={value.link}
                className={`w-full text-center ${value.borderButton} rounded-lg py-1 duration-200 hover:bg-cyan-300/10`}
              >
                Page Official
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
