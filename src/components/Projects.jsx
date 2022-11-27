const Skills = () => {
  const skills = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dovavvnjx/image/upload/v1669483511/Project_1_wz8veq.png",
      alt: `Project {id}`,
      link: "https://www.figma.com/file/FBjnIDfGIzTf804VQIZkpl/ecommerce---Extensiones-M%C3%ADla-Medell%C3%ADn?node-id=0%3A1&t=ctviQXE1SNTdWHSY-1",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dovavvnjx/image/upload/v1669483511/Project_2_ny91v6.png",
      alt: `Project {id}`,
      link: "https://www.figma.com/file/GZ4iUAXavkjrATwmezaR3d/StudioGhibli-Design?node-id=0%3A1&t=xG2rwlpcYKOULvX6-1",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dovavvnjx/image/upload/v1669483511/Project_3_mazmj5.png",
      alt: `Project {id}`,
      link: "https://www.figma.com/file/ilOV0iUrS8pBSBZvA49hbX/Aura-Cristina?node-id=0%3A1&t=L5f5Q5f48W0DkQql-1",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dovavvnjx/image/upload/v1669483510/Project_4_f3wx6v.png",
      alt: `Project {id}`,
      link: "https://www.figma.com/file/glBt0DnWZEYBvO6VtGcPoF/Cretten---Plataforma-de-juegos?node-id=0%3A1&t=AoCaFIQKJ6qPu3Df-1",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dovavvnjx/image/upload/v1669537841/Portfolio_1_ilcm94.png",
      alt: `Project {id}`,
      link: "https://www.figma.com/file/EuSvVGDtYHvGagB1nNvUJT/Portfolio?node-id=0%3A1&t=Vl6150wVI9K6Z5sz-1",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dovavvnjx/image/upload/v1669538485/Home_Mobile_1_j5pmqx.png",
      alt: `Project {id}`,
      link: "https://www.figma.com/file/u4a3TWn4kErusZSabwBejI/Ecommerce---LE-BUT?node-id=0%3A1&t=rMne1W5tybNUGAqD-1",
    },
  ];
  return (
    <section
      className="w-full h-full px-40 py-5 pt-20 flex flex-col gap-5 duration-200 dark:text-white max-sm:px-6"
      id="Projects"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-7xl max-sm:text-5xl">Projects</h1>
        <p className="text-2xl max-sm:text-lg">A brief description of my projects!</p>
      </div>
      <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        {skills.map((value, index) => (
          <a
            href={value.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="shadow-2xl w-full h-full border border-black/10 dark:border-white/10 rounded-lg flex relative"
          >
            <span className="text-3xl font-semibold absolute bottom-0 pl-3 pb-3 ">
              {value.id}
            </span>
            <img className="rounded-lg" src={value.image} alt={value.alt} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
